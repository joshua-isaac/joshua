import React from "react";

const ServiceListingItem = ({ item }) => {
  return (
    <article className="mb-6">
      <h3 className="text-xl font-semibold text-gray-900 mb-2">
        {item.Name?.title[0].plain_text}
      </h3>
      <p className="text-gray-600 leading-relaxed">
        {item.Description?.rich_text[0].plain_text}
      </p>
    </article>
  );
};

export default ServiceListingItem;
