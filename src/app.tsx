import React, { StrictMode } from "react";
import { Provider } from "react-redux";
import { store } from "./store/store";

type ProviderItem<T> = [React.FC<T>, T?];

interface Props {
  items: Array<ProviderItem<unknown>>;
  children: any;
}

function Compose({ items, children }: Props) {
  return items.reduceRight(
    (acc, [ContextProvider, props]: any) =>
      React.createElement(ContextProvider, props, acc),
    children
  );
}

export const App: React.FC = () => {
  return (
    <Compose items={[[StrictMode], [Provider, { store }]]}>
      <div></div>
    </Compose>
  );
};
