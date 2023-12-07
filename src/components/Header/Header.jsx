import NavigationItem from '../NavigationItem/NavigationItem';
import './header.css';
import { UsersContext } from "../../App";
import { useContext } from 'react';
import { Link } from "react-router-dom";
import { PRODUCTS_PATH, REF_PATH, REGISTRATION_PATH, HOME_PATH, NEWS_PATH, ORDER_PATH, ABOUT_PATH, BLOG_PATH } from '../../constants/routes-links';
import AboutUs from '../AboutUs';

const Header = () => {
  const { usersCount } = useContext(UsersContext);

  const navElements = [
    {
      text: "First",
      isUppercasetext: true,
      description: "second description",
    },
    {
      text: "Second",
      isUppercasetext: true,
      description: "second description",
    },
    {
      text: "Third",
      isUppercasetext: true,
      description: "second description",
    },
    {
      text: "samsung",
      isUppercasetext: true,
    },
  ];

  const someParam = "hello_param";

  return (
    <header>
      <Link to={HOME_PATH}>Home</Link>
      <Link to={PRODUCTS_PATH}>Products</Link>
      <Link to={REGISTRATION_PATH}>Registration</Link>
      <Link to={`/ref/${someParam}`}>Ref</Link>
      <Link to={BLOG_PATH}>Blog</Link>
      <Link to={NEWS_PATH}>News</Link>
      <Link to={ABOUT_PATH}>About us</Link>
      <Link to={ORDER_PATH}>Order Page</Link>
      {/* {navElements.map((element) => {
        return (
          <NavigationItem
            key={element.text}
            text={element.text}
            isUppercasetext={element.isUppercasetext}
            description={element.description}
          />
        );
      })} */}
      <div>User Count: {usersCount}</div>
    </header>
  );
};


 export default Header;