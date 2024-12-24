import { FC, Key, memo, ReactNode, useMemo, useState } from "react";
import cn from "classnames";
import cls from "./Tabs.module.scss";
import { Button } from "@ui/button";

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
  const [currentKey, setCurrentKey] = useState<Key | undefined>(defaultKey);

  const currentTab = useMemo(() => {
    let current;
    if (currentKey) {
      current = items.find((item) => item.key === currentKey);

      if (!current) {
        setCurrentKey(items[0].key);
      }
    }

    return current ? current : items[0];
  }, [items, currentKey]);

  const onClickTabChange = (key: Key, currentTab: TabsDataType) => {
    setCurrentKey(key);

    if (onChange) {
      onChange(key, currentTab);
    }
  };

  return (
    <div className={cn(cls.tabs, className)}>
      <nav className={cn(cls.tabsNavigation)}>
        <ul className={cn(cls.tabsList)}>
          {items.map((item) => {
            const isCurrentTab = item.key === currentKey;

            return (
              <li
                key={item.key}
                className={cn(cls.tabsItem, isCurrentTab && "current")}
              >
                <Button
                  theme={isCurrentTab ? "accent" : "primary"}
                  size={"lg"}
                  onClick={() => onClickTabChange(item.key, item)}
                >
                  {item.label}
                </Button>
              </li>
            );
          })}
        </ul>
      </nav>
      <div className={cls.tabsContent}>{currentTab.children}</div>
    </div>
  );
});
