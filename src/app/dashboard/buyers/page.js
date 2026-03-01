// src/app/buyers/page.js
"use client";

import { useEffect, useState } from "react";
import { supabase } from "../../../utils/supabaseClient";

export default function BuyersDashboard() {
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchListings = async () => {
      const now = new Date().toISOString();

      const { data, error } = await supabase
        .from("listings")
        .select("*")
        .gt("expires_at", now); // fetch only listings that haven't expired

      if (error) {
        console.error("Error fetching listings:", error.message);
      } else {
        setListings(data);
      }

      setLoading(false);
    };

    fetchListings();
  }, []);

  return (
    <div className="min-h-screen p-8 bg-gray-100 text-black">
      <h1 className="text-3xl font-bold mb-6">🛍️ Available Listings</h1>

      {loading ? (
        <p className="text-gray-600">Loading listings...</p>
      ) : listings.length === 0 ? (
        <p className="text-red-500">No active listings at the moment.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {listings.map((item) => (
            <div
              key={item.id}
              className="bg-white p-6 rounded-lg shadow-md border border-gray-300"
            >
              <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
              <p className="text-sm mb-2">{item.description}</p>
              <p className="text-xs text-gray-500">
                ⏳ Expires:{" "}
                {new Date(item.expires_at).toLocaleString("en-IN", {
                  dateStyle: "medium",
                  timeStyle: "short",
                })}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}


