/*
        'X-Shopify-Storefront-Access-Token': '2b53273f304d7e38d95dea9313b504a0',
*/

import React, { useState, useEffect } from 'react';
import { statuses } from '../constants';
import Heading from './Heading';
import Section from './Section';
import Scroll from './Scroll';

const Status = () => {
  const [productStatuses, setProductStatuses] = useState([]);
  const [isVisible, elementRef] = Scroll();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch('https://doubledink-cs-go.myshopify.com/api/2022-01/graphql.json', {
      method: 'POST',
      headers: {
        'X-Shopify-Storefront-Access-Token': '2b53273f304d7e38d95dea9313b504a0',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        query: `
        {
          products(first: 50) {
            edges {
              node {
                tags
                title
                handle
              }
            }
          }
        }
        `
      })
    })
      .then(response => response.json())
      .then(data => {
        const statusData = data.data.products.edges.map(edge => {
          const tags = edge.node.tags;
          const title = edge.node.title;
          const handle = edge.node.handle;
          const statusTag = tags.find(tag => statuses.some(status => status.title === tag)) || 'Unknown';
          return { title, handle, status: statusTag };
        });
        setProductStatuses(statusData);
      })
      .catch(error => console.error('Error fetching tags:', error));
  };

  const getStatusBackground = (status) => {
    const statusObj = statuses.find(s => s.title === status);
    return statusObj ? statusObj.background : 'bg-gray-500';
  };

  return (
    <Section id="status">
      <div className="container relative z-2">
        <Heading
          className="md:max-w-md lg:max-w-2xl"
          title="Product Status"
        />

        <div className="flex flex-wrap gap-4 mb-10" ref={elementRef}>
          {productStatuses.map((product, index) => (
            <div
              key={index}
              className={`block relative p-4 bg-n-8 border border-n-6 rounded-[2rem] transition-opacity duration-700 ease-in-out ${isVisible ? 'opacity-100' : 'opacity-0'} w-[19rem] max-lg:w-full h-full flex flex-col justify-between`}
            >
              <div className="flex flex-col justify-between h-full">
                <h5 className="h4 mb-2">{product.title}</h5> {/* Adjusted margin-bottom */}
                <p className={`body-2 text-n-3 ${getStatusBackground(product.status)} py-2 px-4 rounded-full text-white text-center`}>
                  {product.status}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Status;