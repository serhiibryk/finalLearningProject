import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  root: {
    "& .ant-menu": {
      display: "flex",
    },

    "& .ant-menu-item": {
      // display: "flex",
      height: "87%",
    },
    "& .ant-menu-item-selected": {
      backgroundColor: "black !important",
      height: "87%",
    },

    "& .ant-menu-dark.ant-menu-vertical>.ant-menu-item:hover": {
      backgroundColor: "black !important",
    },
    // "& .ant-menu .ant-menu-root .ant-menu-vertical .ant-menu-dark menu-0-2-2": {
    //   width: "200px",
    // },
  },

  menu: {
    "@media screen and (max-width: 935px)": {
      display: "none !important",
    },
    "& .ant-menu-item:last-child": {
      marginLeft: "auto",
    },
  },

  dropmenu: {
    display: "none",
    backgroundColor: "black",
    width: "400px",
    // "& .ant-dropdown-menu": {
    //   width: "400px !important",
    // },

    "@media screen and (max-width: 935px)": {
      display: "block",
    },

    // width: "200px !important",
  },

  "& .ant-dropdown-menu": {
    backgroundColor: "black",
  },

  menuDropText: {
    color: "white",
    display: "flex",
    justifyContent: "center",
  },

  changedLog: {
    display: "flex",
    justifyContent: "flex-end",
  },

  menuWithLogo: {
    display: "flex",
  },
  logo: {
    display: "flex",
    position: "static",
    padding: "0 2em 0 2em",
    cursor: "pointer",
  },
  imgLogo: {
    height: "64px",
    minHeight: "64px",
    maxHeight: "64px",
  },
  logout: {
    display: "flex",
    justifyContent: "center",
    borderColor: "black",
    backgroundColor: "black",
    color: "white",
    position: "static",
    margin: "1em",
  },
});

export default useStyles;
// <ul
//   class="ant-dropdown-menu ant-dropdown-menu-root ant-dropdown-menu-vertical ant-dropdown-menu-light"
//   role="menu"
//   tabindex="0"
//   data-menu-list="true"
//   style="
// "
// >
//   <li
//     class="ant-dropdown-menu-item ant-dropdown-menu-item-selected ant-dropdown-menu-item-only-child"
//     role="menuitem"
//     tabindex="-1"
//     data-menu-id="rc-menu-uuid-84225-1-/"
//   >
//     <span class="ant-dropdown-menu-title-content">Main</span>
//   </li>
//   <li
//     class="ant-dropdown-menu-item ant-dropdown-menu-item-only-child"
//     role="menuitem"
//     tabindex="-1"
//     data-menu-id="rc-menu-uuid-84225-1-/people"
//   >
//     <span class="ant-dropdown-menu-title-content">People</span>
//   </li>
//   <li
//     class="ant-dropdown-menu-item ant-dropdown-menu-item-only-child"
//     role="menuitem"
//     tabindex="-1"
//     data-menu-id="rc-menu-uuid-84225-1-/films"
//   >
//     <span class="ant-dropdown-menu-title-content">Films</span>
//   </li>
//   <li
//     class="ant-dropdown-menu-item ant-dropdown-menu-item-only-child"
//     role="menuitem"
//     tabindex="-1"
//     data-menu-id="rc-menu-uuid-84225-1-/planets"
//   >
//     <span class="ant-dropdown-menu-title-content">Planets</span>
//   </li>
//   <li
//     class="ant-dropdown-menu-item ant-dropdown-menu-item-only-child"
//     role="menuitem"
//     tabindex="-1"
//     data-menu-id="rc-menu-uuid-84225-1-/species"
//   >
//     <span class="ant-dropdown-menu-title-content">Species</span>
//   </li>
//   <li
//     class="ant-dropdown-menu-item ant-dropdown-menu-item-only-child"
//     role="menuitem"
//     tabindex="-1"
//     data-menu-id="rc-menu-uuid-84225-1-/starships"
//   >
//     <span class="ant-dropdown-menu-title-content">Starships</span>
//   </li>
//   <li
//     class="ant-dropdown-menu-item ant-dropdown-menu-item-only-child"
//     role="menuitem"
//     tabindex="-1"
//     data-menu-id="rc-menu-uuid-84225-1-/vehicles"
//   >
//     <span class="ant-dropdown-menu-title-content">Vehicles</span>
//   </li>
//   <li
//     class="ant-dropdown-menu-item ant-dropdown-menu-item-only-child"
//     role="menuitem"
//     tabindex="-1"
//     data-menu-id="rc-menu-uuid-84225-1-/profile"
//   >
//     <span class="ant-dropdown-menu-title-content">Profile</span>
//   </li>
//   <li
//     class="ant-dropdown-menu-item ant-dropdown-menu-item-only-child"
//     role="menuitem"
//     tabindex="-1"
//     data-menu-id="rc-menu-uuid-84225-1-/login"
//   >
//     <span class="ant-dropdown-menu-title-content">Log out</span>
//   </li>
// </ul>;
