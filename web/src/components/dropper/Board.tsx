import { Quote, QuoteMap } from "@/utils/types";
import { colors } from "@atlaskit/theme";
import { Global, css } from "@emotion/react";
import type {
  DraggableLocation,
  DropResult,
  DroppableProvided,
} from "@hello-pangea/dnd";
import { DragDropContext, Droppable } from "@hello-pangea/dnd";
import React, { Component, ReactElement } from "react";
import Column from "./Column";
import reorder, { reorderQuoteMap } from "./reorder";

interface Props {
  initial: QuoteMap;
  withScrollableColumns?: boolean;
  isCombineEnabled?: boolean;
  containerHeight?: string;
  useClone?: boolean;
  applyGlobalStyles?: boolean;
  autoScrollerOptions?: any; //PartialAutoScrollerOptions;
}

interface State {
  columns: QuoteMap;
  ordered: string[];
}

export default class Board extends Component<Props, State> {
  /* eslint-disable react/sort-comp */
  static defaultProps = {
    isCombineEnabled: false,
    applyGlobalStyles: true,
  };

  state: State = {
    columns: this.props.initial,
    ordered: Object.keys(this.props.initial),
  };

  onDragEnd = (result: DropResult): void => {
    if (result.combine) {
      if (result.type === "COLUMN") {
        const shallow: string[] = [...this.state.ordered];
        shallow.splice(result.source.index, 1);
        this.setState({ ordered: shallow });
        return;
      }

      const column: Quote[] = this.state.columns[result.source.droppableId];
      const withQuoteRemoved: Quote[] = [...column];
      withQuoteRemoved.splice(result.source.index, 1);
      const columns: QuoteMap = {
        ...this.state.columns,
        [result.source.droppableId]: withQuoteRemoved,
      };
      this.setState({ columns });
      return;
    }

    // dropped nowhere
    if (!result.destination) {
      return;
    }

    const source: DraggableLocation = result.source;
    const destination: DraggableLocation = result.destination;

    // did not move anywhere - can bail early
    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    ) {
      return;
    }

    // reordering column
    if (result.type === "COLUMN") {
      const ordered: string[] = reorder(
        this.state.ordered,
        source.index,
        destination.index,
      );

      this.setState({
        ordered,
      });

      return;
    }

    const data = reorderQuoteMap({
      quoteMap: this.state.columns,
      source,
      destination,
    });

    this.setState({
      columns: data.quoteMap,
    });
  };

  render(): ReactElement {
    const columns: QuoteMap = this.state.columns;
    const ordered: string[] = this.state.ordered;
    const {
      containerHeight,
      useClone,
      isCombineEnabled,
      withScrollableColumns,
      applyGlobalStyles,
    } = this.props;

    const board = (
      <Droppable
        droppableId="board"
        type="COLUMN"
        direction="horizontal"
        ignoreContainerClipping={Boolean(containerHeight)}
        isCombineEnabled={isCombineEnabled}
      >
        {(provided: DroppableProvided) => (
          <div
            ref={provided.innerRef}
            className="flex"
            {...provided.droppableProps}
          >
            {ordered.map((key: string, index: number) => (
              <Column
                key={key}
                index={index}
                title={key}
                quotes={columns[key]}
                isScrollable={withScrollableColumns}
                isCombineEnabled={isCombineEnabled}
                useClone={useClone}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    );

    return (
      <React.Fragment>
        <DragDropContext
          onDragEnd={this.onDragEnd}
          autoScrollerOptions={this.props.autoScrollerOptions}
        >
          {containerHeight ? (
            <div style={{ height: containerHeight }}>{board}</div>
          ) : (
            board
          )}
        </DragDropContext>
        {applyGlobalStyles ? (
          <Global
            styles={css`
              body {
                background: ${colors.B200};
              }
            `}
          />
        ) : null}
      </React.Fragment>
    );
  }
}
