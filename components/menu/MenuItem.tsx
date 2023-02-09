import React from "react";
import { StyleSheet } from "react-native";

type Props = {};

const MenuItem: React.FC<Props> = ({}) => {
  return (
    <MenuHeadless.Item>
      {({ active }) => (
        <button
          className={`${
            active ? "bg-violet-500 text-white" : "text-gray-900"
          } group flex w-full items-center rounded-md px-2 py-2 text-sm`}>
          Edit
        </button>
      )}
    </MenuHeadless.Item>
  );
};

export default MenuItem;

const style = StyleSheet.create({});
