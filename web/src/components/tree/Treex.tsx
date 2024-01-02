import {
  StaticTreeDataProvider,
  Tree,
  UncontrolledTreeEnvironment,
} from "react-complex-tree";

const readTemplate = (template: any, data: any = { items: {} }) => {
  for (const [key, value] of Object.entries(template)) {
    // eslint-disable-next-line no-param-reassign
    data.items[key] = {
      index: key,
      canMove: true,
      isFolder: value !== null,
      children:
        value !== null
          ? Object.keys(value as Record<string, unknown>)
          : undefined,
      data: key,
      canRename: true,
    };

    if (value !== null) {
      readTemplate(value, data);
    }
  }
  return data;
};

const shortTreeTemplate = {
  root: {
    container: {
      item0: null,
      item1: null,
      item2: null,
      item3: {
        inner0: null,
        inner1: null,
        inner2: null,
        inner3: null,
      },
      item4: null,
      item5: null,
    },
  },
};

const longTreeTemplate = {
  root: {
    Fruit: {
      Apple: null,
      Orange: null,
      Lemon: null,
      Berries: {
        Red: {
          Strawberry: null,
          Raspberry: null,
        },
        Blue: {
          Blueberry: null,
        },
        Black: {
          Blackberry: null,
        },
      },
      Banana: null,
    },
    Meals: {
      America: {
        SmashBurger: null,
        Chowder: null,
        Ravioli: null,
        MacAndCheese: null,
        Brownies: null,
      },
      Europe: {
        Risotto: null,
        Spaghetti: null,
        Pizza: null,
        Weisswurst: null,
        Spargel: null,
      },
      Asia: {
        Curry: null,
        PadThai: null,
        Jiaozi: null,
        Sushi: null,
      },
      Australia: {
        PotatoWedges: null,
        PokeBowl: null,
        LemonCurd: null,
        KumaraFries: null,
      },
    },
    Desserts: {
      Cookies: null,
      IceCream: null,
    },
    Drinks: {
      PinaColada: null,
      Cola: null,
      Juice: null,
    },
  },
};

const autoDemoTemplate = {
  root: {
    Fruit: {
      Apple: null,
      Orange: null,
      Lemon: null,
      Berries: {
        Strawberry: null,
        Blueberry: null,
      },
      Banana: null,
    },
    Meals: {
      America: {
        SmashBurger: null,
        Chowder: null,
        Ravioli: null,
        MacAndCheese: null,
        Brownies: null,
      },
      Europe: {
        Risotto: null,
        Spaghetti: null,
        Pizza: null,
        Weisswurst: null,
        Spargel: null,
      },
      Asia: {
        Curry: null,
        PadThai: null,
        Jiaozi: null,
        Sushi: null,
      },
      Australia: {
        PotatoWedges: null,
        PokeBowl: null,
        LemonCurd: null,
        KumaraFries: null,
      },
    },
    Desserts: {
      Cookies: null,
      IceCream: null,
    },
    Drinks: {
      PinaColada: null,
      Cola: null,
      Juice: null,
    },
  },
};

export const longTree = readTemplate(longTreeTemplate);
export const shortTree = readTemplate(shortTreeTemplate);
export const autoDemoTree = readTemplate(autoDemoTemplate);

export const MultipleTrees2 = () => (
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
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "stretch",
      }}
    >
      <div
        style={{
          width: "44%",
          backgroundColor: "#fff",
          color: "#000",
          borderRadius: "12px",
          paddingRight: "6px",
        }}
      >
        <Tree treeId="tree-1" rootItem="root" treeLabel="Tree 1" />
      </div>
      <div
        className="rct-dark"
        style={{
          width: "44%",
          backgroundColor: "#222",
          color: "#e3e3e3",
          borderRadius: "12px",
          paddingRight: "6px",
        }}
      >
        <Tree treeId="tree-2" rootItem="root" treeLabel="Tree 2" />
      </div>
    </div>
  </UncontrolledTreeEnvironment>
);
