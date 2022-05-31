import { FC, useContext, useEffect, useState } from 'react';
import { Divider, Menu } from 'antd';

import { Button } from '@components/atoms/Button';
import {
  AllModules,
  CaretDown,
  ID,
  Lifebuoy,
  ListCheck,
  Module,
  Plus,
  School,
  Search,
  Settings,
} from '@components/atoms/Icon';

import { css } from '@emotion/react';
import { Badge } from '@components/atoms/Badge';
import { Link } from 'react-router-dom';

import { SideBarMenu } from '@components/molecules/SideBarMenu';
import { SubMenuInput } from '@components/atoms/SubMenuInput';
import { PageMetaContext } from '@context/PageMetaContext';

import { SideBarHoverContainer } from '@modules/all-modules/components/organisms/SideBarHoverContainer';
import { moduleApi } from '@modules/admin/modules/business-modules/api/businessModulesApi';
import { useQuery } from 'react-query';
import {
  ModuleSection,
  ModuleWithSections,
} from '@modules/admin/modules/business-modules/types/Module';

const { SubMenu } = Menu;
export type SideBarNavigationProps = {
  readonly isSideBarCollapsed: boolean;
};

export const SideBarNavigation: FC<SideBarNavigationProps> = ({
  isSideBarCollapsed,
}) => {
  const {
    selectedMenuKeys,
    setSelectedMenuKeys,
    openMenuKeys,
    setOpenMenuKeys,
  } = useContext(PageMetaContext);

  //Подтянуть список модулей С секциями
  const [moduleProps, setModuleProps] = useState<{
    id: string;
    name: string;
    sections: ModuleSection[];
  }>();
  const [pageSize, setPageSize] = useState(20);
  const [pageNumber, setPageNumber] = useState(0);
  const { data, isLoading, refetch } = useQuery(
    'getAllModules',
    () =>
      moduleApi
        .getAllModulesWithSections(pageNumber, pageSize)
        .then((res) => res.data),
    {
      refetchOnWindowFocus: false,
    }
  );

  return (
    <SideBarMenu
      mode="inline"
      theme="light"
      isSideBarCollapsed={isSideBarCollapsed}
      selectedKeys={selectedMenuKeys}
      openKeys={openMenuKeys}
      onSelect={(info) => setSelectedMenuKeys(info.selectedKeys)}
      onOpenChange={(openKeys) => setOpenMenuKeys(openKeys)}
    >
      <Menu.Divider className="my-2 mx-0" />

      <SubMenu
        key="tasks"
        icon={
          <div>
            <ListCheck />
            <CaretDown />
          </div>
        }
        title="Панель задач"
      >
        <SubMenuInput
          placeholder="Поиск по ID задачи"
          prefix={<Search />}
          size="small"
        />
        <Menu.Item key="1">
          <Link to={'/tasks/assigned'}>Визирование</Link>
        </Menu.Item>
        <Menu.Item key="assigned">
          <Link to={'/tasks/assigned'}>Назначенные</Link>
        </Menu.Item>
        <Menu.Item key="created">
          <Link to={'/tasks/created'}>Созданные</Link>
        </Menu.Item>
      </SubMenu>

      <SubMenu
        key="administration"
        icon={<Settings />}
        title="Администрирование"
      >
        <Menu.Item key="users">
          <Link to={'/admin/users/'}>Пользователи</Link>
        </Menu.Item>
        <Menu.Item key="bp-constructor">
          <Link to={'/admin/bp/'}>Бизнес-процессы</Link>
        </Menu.Item>
        <Menu.Item key="modules">
          <Link to={'/admin/modules/'}>Модули</Link>
        </Menu.Item>
        <Menu.Item key="orgStructure">
          <Link to={'/admin/org-structure/'}>Орг структура</Link>
        </Menu.Item>
        <Menu.Item key="forms">
          <Link to={'/admin/forms/'}>Формы</Link>
        </Menu.Item>
      </SubMenu>

      <Menu.Item icon={<AllModules />} key="attachment-1">
        <Link to={'/reports/attachment-1/'}>Приложение-1</Link>
      </Menu.Item>
      <Menu.Item icon={<AllModules />} key="attachment-2">
        <Link to={'/reports/attachment-2/'}>Приложение-2</Link>
      </Menu.Item>
      <SubMenu key="crm" icon={<Module />} title="CRM">
        <Menu.Item key="contracts">
          <Link to={'/crm/contracts/'}>Сделки</Link>
        </Menu.Item>
        <Menu.Item key="contractors">
          <Link to={'/crm/contractors/'}>Контакты</Link>
        </Menu.Item>
        <Menu.Item key="archive">
          <Link to={'/crm/archive/'}>Архив</Link>
        </Menu.Item>
      </SubMenu>
      <Menu.Item icon={<Module />} key="5">
        Модуль коммерция
        <Badge count={1234} />
      </Menu.Item>

      <SubMenu key="all-modules" icon={<AllModules />} title="Все модули">
        {data?.content?.map((module: ModuleWithSections) => (
          <Menu.Item
            key={module.moduleId}
            onClick={() =>
              setModuleProps({
                id: module.moduleId,
                name: module.name,
                sections: module.sections,
              })
            }
          >
            {module.name}
          </Menu.Item>
        ))}
      </SubMenu>
      {/* Перекрытие для SideBar */}
      <SideBarHoverContainer
        moduleProps={moduleProps}
        setModuleProps={setModuleProps}
      />

      {/* <MenuAntd.Item key="addMod"> */}
      <Button
        type="primary"
        icon={<Plus />}
        shape={isSideBarCollapsed ? 'circle' : 'default'}
        buttonSize="lg"
        css={css`
          ${isSideBarCollapsed ? 'margin: 16px 0' : 'margin: 16px 20px'}
        `}
      >
        {!isSideBarCollapsed && 'Добавить модуль'}
      </Button>
      {/* </MenuAntd.Item> */}

      <Menu.Divider className="my-2 mx-0" />

      <Divider className="my-2 mx-0" />
      <Menu.Item icon={<ID />} key="6">
        <a
          href="https://pass.kazatomprom.kz/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Пропуск
        </a>
      </Menu.Item>
      <Menu.Item icon={<School />} key="7">
        <a
          href="https://bilim.knu.kazatomprom.kz/lmsp-front/#/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Обучение
        </a>
      </Menu.Item>
      <Menu.Item icon={<Lifebuoy />} key="8">
        Сервисы
      </Menu.Item>
    </SideBarMenu>
  );
};
