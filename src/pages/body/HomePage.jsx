import React, { useEffect, useReducer } from 'react'
import { HomeApartment } from '../home_apartment/HomeApartment'
import axios from 'axios';
import Error from '../Error';
import Loader from '../../components/common/Loader'
import HomeApartmentList from '../home_apartment/HomeApartmentList';
import HeadLine from '../../components/headline/HeadLine';

const initialState = {
  apartments: [],
  status: "loading"
}

function reducer(state, action) {
  switch (action.type) {
    case "loadApartmentSuccess":
      return {
        ...state,
        apartments: action.payload,
        status: "ready"
      }
    case "loadFailed":
      return {
        ...state,
        status: "error"
      }
    default:
      break;
  }
}
export default function HomePage() {
  const [{ apartments, status }, dispatch] = useReducer(reducer, initialState);
  useEffect(function () {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:9090/apartments");
        const result = await response.json();
        dispatch({ type: "loadApartmentSuccess", payload: result })
      }
      catch (err) {
        dispatch({ type: 'loadFailed' });
      }
    }
    fetchData();
  }, []);
  return (
    <div className="overflow-hidden">
      <HeadLine pageName="HOME_PAGE" />
      {status === "loading" && <Loader />}
      {status === "error" && <Error />}
      {status === "ready" &&
        <HomeApartmentList apartments={apartments} />
      }
    </div>
  )
}

