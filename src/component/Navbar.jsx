import React, { useState } from "react";

import { AtlassianIcon, AtlassianLogo } from "@atlaskit/logo";

import {
  AtlassianNavigation,
  PrimaryButton,
  PrimaryDropdownButton,
  ProductHome,
  Create,
  Settings,
} from "@atlaskit/atlassian-navigation";
import DropdownMenu, {
  DropdownItem,
  DropdownItemGroup,
} from "@atlaskit/dropdown-menu";
const AtlassianProductHome = () => (
  <ProductHome icon={AtlassianIcon} logo={AtlassianLogo} />
);

const Navbar = () => {
  const [dropdown, setDropdown] = useState();
  const CreateButton = () => (
    <Create
      buttonTooltip="Create a new page"
      iconButtonTooltip="Create a new page"
      text="Create"
      href="#"
      onClick={() => {}}
    />
  );
  const DefaultSettings = () => <Settings tooltip="Product settings" />;
  return (
    <div>
      <AtlassianNavigation
        label="site"
        primaryItems={[
          <PrimaryButton onClick={() => alert("Hello")}>Alert</PrimaryButton>,
          <PrimaryDropdownButton onClick={() => setDropdown((prev) => !prev)}>
            <DropdownMenu isOpen={dropdown} trigger="Page actions">
              <DropdownItemGroup>
                <DropdownItem description="Previous versions are saved">
                  Edit
                </DropdownItem>
                <DropdownItem>Move</DropdownItem>
                <DropdownItem>Clone</DropdownItem>
              </DropdownItemGroup>
            </DropdownMenu>
          </PrimaryDropdownButton>,
          <PrimaryDropdownButton>Projects</PrimaryDropdownButton>,
          // <DropDown />,
        ]}
        renderCreate={CreateButton}
        renderProductHome={AtlassianProductHome}
        renderSettings={DefaultSettings}
      />
    </div>
  );
};

export default Navbar;
