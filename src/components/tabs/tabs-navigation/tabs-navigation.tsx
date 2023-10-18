import classNames from 'classnames';

type TTabsNavigationProps = {
  tab: string;
  activeTab: string;
  setActiveTab: (tab: string) => void;
};

function TabsNavigation({
  tab,
  activeTab,
  setActiveTab,
}: TTabsNavigationProps): JSX.Element {
  const handleTabClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setActiveTab(tab);
  };

  return (
    <li
      className={classNames('film-nav__item', {
        'film-nav__item--active': activeTab === tab,
      })}
    >
      <a href="#" className="film-nav__link" onClick={handleTabClick}>
        {tab}
      </a>
    </li>
  );
}

export default TabsNavigation;
