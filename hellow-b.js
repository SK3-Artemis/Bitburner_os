function CustomComponent(props) {
  return React.createElement(
    "div", {
      style: {
        color: "#ffffff",
        fontSize: "40px",
        fontFamily: "sans-serif"
      },
    },
    "hello world",
  );
}

/** @param {NS} ns */
export async function main(ns) {
  ns.tail();
  ns.printRaw(React.createElement(CustomComponent));
}
