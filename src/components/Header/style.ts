import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  root: {
    "& .ant-menu": {
      display: "flex",
    },
    "& .ant-menu-item": {
      height: "87%",
    },
    "& .ant-menu-item-selected": {
      backgroundColor: "black !important",
      height: "87%",
    },

    "& .ant-menu-dark.ant-menu-vertical>.ant-menu-item:hover": {
      backgroundColor: "black !important",
    },
  },

  menu: {
    "@media screen and (max-width: 935px)": {
      display: "none !important",
    },
    "& .ant-menu-item:last-child": {
      marginLeft: "auto",
    },
  },

  overlay: {
    // width: "200px",

    "& .ant-dropdown-menu": {
      backgroundColor: "black",
    },

    "& .ant-dropdown-menu-item": {
      width: "250px",
      color: "grey",
      // backgroundColor: "black",
    },
  },

  dropmenu: {
    display: "none",
    backgroundColor: "black",
    width: "64px",
    // marginLeft: "auto",

    "@media screen and (max-width: 935px)": {
      display: "block",
    },
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
