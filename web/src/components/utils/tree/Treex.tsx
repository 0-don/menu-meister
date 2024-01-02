import { longTree } from "@/utils/constants";
import {
  StaticTreeDataProvider,
  Tree,
  UncontrolledTreeEnvironment,
} from "react-complex-tree";

export const MultipleTrees2 = () => (
  <>
    <UncontrolledTreeEnvironment<string>
      canDragAndDrop
      canDropOnFolder
      canReorderItems
      dataProvider={
        new StaticTreeDataProvider(longTree.items, (item, data) => ({
          ...item,
          data,
        }))
      }
      getItemTitle={(item) => item.data}
      viewState={{
        "tree-1": {
          expandedItems: [
            "Fruit",
            "Meals",
            "America",
            "Europe",
            "Asia",
            "Desserts",
          ],
        },
      }}
      renderItemTitle={({ title }) => <span>{title}</span>}
      renderItemArrow={({ item, context }) =>
        item.isFolder ? (
          context.isExpanded ? (
            <span>{">"}</span>
          ) : (
            <span>v</span>
          )
        ) : null
      }
      renderItem={({ title, arrow, context, children }) => (
        <li {...context.itemContainerWithChildrenProps}>
          <button
            type="button"
            {...context.itemContainerWithoutChildrenProps}
            {...(context.interactiveElementProps as any)}
          >
            {arrow}
            {title}
          </button>
          {children}
        </li>
      )}
      renderTreeContainer={({ children, containerProps }) => (
        <div {...containerProps}>{children}</div>
      )}
      renderItemsContainer={({ children, containerProps }) => (
        <ul {...containerProps}>{children}</ul>
      )}
    >
      <Tree treeId="tree-1" rootItem="root" treeLabel="Tree Example" />
    </UncontrolledTreeEnvironment>
    <UncontrolledTreeEnvironment<string>
      canDragAndDrop
      canDropOnFolder
      canReorderItems
      dataProvider={
        new StaticTreeDataProvider(longTree.items, (item, data) => ({
          ...item,
          data,
        }))
      }
      getItemTitle={(item) => item.data}
      viewState={{
        "tree-1": {
          expandedItems: ["Meals", "Europe"],
          selectedItems: ["Risotto", "Pizza", "Weisswurst", "Spargel"],
          focusedItem: "Spargel",
        },
        "tree-2": {
          expandedItems: ["Fruit", "Berries"],
          selectedItems: ["Orange"],
          focusedItem: "Orange",
        },
      }}
    >
      <div className="flex items-stretch justify-between">
        <div className="w-44 rounded-lg bg-white pr-6 text-black">
          <Tree
            renderItemArrow={() => <></>}
            treeId="tree-1"
            rootItem="root"
            treeLabel="Tree 1"
          />
        </div>
        <div className="rct-dark w-44 rounded-lg bg-gray-900 pr-6 text-gray-300">
          <Tree
            renderItemArrow={() => <></>}
            treeId="tree-2"
            rootItem="root"
            treeLabel="Tree 2"
          />
        </div>
      </div>
    </UncontrolledTreeEnvironment>
  </>
);
