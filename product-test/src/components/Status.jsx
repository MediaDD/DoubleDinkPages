import React, { useState, useEffect } from 'react';
import { statuses } from '../constants';
import Heading from './Heading';
import Section from './Section';

const Status = () => {
  const [productStatus, setProductStatus] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('https://doubledink-cs-go.myshopify.com/api/2022-01/graphql.json', {
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
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log('API response data:', data);

      const product = data.data.products.edges.find(edge => edge.node.title === 'Coming Soon');
      console.log('Product found:', product);

      if (product) {
        const tags = product.node.tags;
        const title = product.node.title;
        const handle = product.node.handle;
        const statusTag = tags.find(tag => statuses.some(status => status.title === tag)) || 'Unknown';
        console.log('Product status:', { title, handle, status: statusTag });
        setProductStatus({ title, handle, status: statusTag });
      } else {
        setProductStatus(null);
      }
    } catch (error) {
      console.error('Error fetching tags:', error);
      setError(error);
    } finally {
      setIsLoading(false);
    }
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
        {isLoading && <p>Loading...</p>}
        {error && <p>Error fetching data: {error.message}</p>}
        {productStatus ? (
          <div className="flex flex-wrap gap-4 mb-10 justify-center">
            <div
              className={`relative p-4 bg-n-8 border border-n-6 rounded-[2rem] w-[19rem] max-lg:w-full h-full flex-col justify-between`}
            >
              <div className="flex flex-col justify-between h-full">
                <h5 className="h4 mb-2 text-center">{productStatus.title}</h5>
                <p className={`body-2 text-n-3 ${getStatusBackground(productStatus.status)} py-2 px-4 rounded-full text-white text-center`}>
                  {productStatus.status}
                </p>
              </div>
            </div>
          </div>
        ) : (
          !isLoading && <p>No status available for the specified product.</p>
        )}
      </div>
    </Section>
  );
};

export default Status;
