import { StyleSheet, Text, View } from 'react-native'
import React, { useState, useContext, createContext } from 'react'

export const AppContext = createContext();

export const AppContextProvider = (props) => {
  //Dùng destructing lấy thuộc tính children từ tham số props của component
  const { children } = props
  //Dùng useState tạo hàm get, set cho các biến toàn cục của app
  var [isLogin, setIsLogin] = useState(true);
  const [cart, setCart] = useState([]);
  const [cartHistory, setCartHistory] = useState([]);
  const [user, setUser] = useState({})
  const [favoriteProducts, setFavoriteProducts] = useState([])

  return (
    <AppContext.Provider 
    // value={{ isLogin, setIsLogin, 
    // cart, setCart, user, setUser, cartHistory, setCartHistory}}

>
      {children}
    </AppContext.Provider>
  )
}

const styles = StyleSheet.create({})