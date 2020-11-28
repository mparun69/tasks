import React, { useState, useEffect } from "react";
import DisplayBeer from "./DisplayBeer";
import Pagination from "./Pagination";

const Fetch = () => {
  const [beers, setBeers] = useState([]);
  const [images, setImages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(20);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = beers.slice(indexOfFirstPost, indexOfLastPost);
  useEffect(() => {
    fetchBear();
    fetchImage();
  }, []);
  const fetchBear = async () => {
    const res = await fetch(
      `https://s3-ap-southeast-1.amazonaws.com/he-public-data/beercraft5bac38c.json`
    );
    const data = await res.json();
    console.log(data);
    setBeers(data);
  };
  const fetchImage = async () => {
    const res = await fetch(
      `https://s3-ap-southeast-1.amazonaws.com/he-public-data/beerimages7e0480d.json`
    );
    const data = await res.json();
    console.log(data);
    setImages(data);
  };
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <DisplayBeer beer={currentPosts} image={images} />
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={beers.length}
        paginate={paginate}
      />
    </div>
  );
};

export default Fetch;
