import { FC, Key, memo, ReactNode, useMemo, useState } from "react";
import cls from "./Tabs.module.scss";
import cn from "classnames";
import { Button } from "shared/ui/button";

export type TabsDataType = {
  key: Key;
  label: string;
  children: ReactNode;
};

type PropsType = {
  items: Array<TabsDataType>;
  className?: string;
  defaultKey?: Key;
  onChange?: (key: Key, currentTab: TabsDataType) => void;
};

export const Tabs: FC<PropsType> = memo((props) => {
  const { items, defaultKey, className, onChange } = props;
  const [currentKey, setCurrentKey] = useState<Key>(0);

  const currentTab = useMemo(() => {
    if (defaultKey || currentKey) {
      return items.reduce((acc, item) => {
        if (item.key === currentKey) {
          acc = item;
        } else {
          acc = items[0];
        }

        return acc;
      }, null);
    }

    return items[currentKey as number];
  }, [items, currentKey]);

  const onClickTabChange = (
    key: TabsDataType["key"],
    currentTab: TabsDataType,
  ) => {
    setCurrentKey(key);

    if (onChange) {
      onChange(key, currentTab);
    }
  };

  return (
    <div>
      <div>
        {items.map((item) => (
          <Button
            key={item.key}
            theme={"accent"}
            size={"md"}
            onClick={() => onClickTabChange(item.key, item)}
          >
            {item.label}
          </Button>
        ))}
      </div>
      <div>{currentTab.children}</div>
    </div>
  );
});
