"use client";

import dynamic from "next/dynamic";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Package, Clock, Tags } from "lucide-react";
import { geoMercator, geoPath } from "d3-geo";
import { supabase } from "../../../utils/supabaseClient"
export default function SellerDashboard() {
  const [activeSection, setActiveSection] = useState("dashboard");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
const [imagePreview, setImagePreview] = useState(null);
const [showDatePicker, setShowDatePicker] = useState(false);
const [durationDate, setDurationDate] = useState("");
const [durationTime, setDurationTime] = useState("");
const [durationLabel, setDurationLabel] = useState("");


  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [duration, setDuration] = useState("");
 const indianStates = [
  "Maharashtra", "Gujarat", "Rajasthan", "Punjab", "Haryana", "Delhi",
  "Uttar Pradesh", "Madhya Pradesh", "Bihar", "West Bengal", "Assam",
  "Odisha", "Jharkhand", "Chhattisgarh", "Karnataka", "Kerala",
  "Tamil Nadu", "Telangana", "Andhra Pradesh", "Goa", "Uttarakhand",
  "Himachal Pradesh", "Jammu & Kashmir"
];
  const [user, setUser] = useState(null)

const MapWithFreeformQuad = dynamic(
  () => import("./SellingRangeMap"),
  {ssr:false }
);
  


const [selectedStates, setSelectedStates] = useState([]);
const [selectedCity, setSelectedCity] = useState("");


  
  
function handleImageUpload(e) {
  const file = e.target.files[0];
  if (file) {
    setImagePreview(URL.createObjectURL(file));
  }
}
function saveSellingRange() {
  console.log("Saved:", selectedStates, selectedCity);
  alert("Selling range saved successfully!");
}


function applyDuration() {
  if (!durationDate || !durationTime) return;

  setDurationLabel(`${durationDate} at ${durationTime}`);
  setShowDatePicker(false);
}
  // Dashboard preview cards
  const exampleProducts = [
    {
      id: 1,
      title: "Sample Product 1",
      price: "₹1,499",
      status: "Active",
      durationLeft: "12 days",
      icon: <Package className="h-10 w-10 text-blue-600" />,
    },
    {
      id: 2,
      title: "Sample Product 2",
      price: "₹899",
      status: "Expired",
      durationLeft: "0 days",
      icon: <Clock className="h-10 w-10 text-red-600" />,
    },
    {
      id: 3,
      title: "Sample Product 3",
      price: "₹2,999",
      status: "Active",
      durationLeft: "22 days",
      icon: <Tags className="h-10 w-10 text-green-600" />,
    },
  ];

  // Dummy selling history
  const sellingHistoryData = [
    { id: 1, product: "Product A", progress: 100, date: "12 Jan 2024" },
    { id: 2, product: "Product B", progress: 70, date: "19 Feb 2024" },
    { id: 3, product: "Product C", progress: 40, date: "5 Mar 2024" },
  ];

  // Upload product
  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = {
      id: Date.now(),
      name,
      description,
      price: "999",
    };
    setProducts([...products, newProduct]);
    setName("");
    setDescription("");
    setDuration("");
  };

  return (
    <div className="flex">

      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 text-white min-h-screen p-5 space-y-6">
        <h1 className="text-2xl font-bold">XENOVA</h1>

        <button
          onClick={() => setActiveSection("dashboard")}
          className="block w-full text-left hover:text-blue-400"
        >
          Dashboard
        </button>

        <button
          onClick={() => setActiveSection("products")}
          className="block w-full text-left hover:text-blue-400"
        >
          Product Listings
        </button>

        <button
          onClick={() => setActiveSection("sellingHistory")}
          className="block w-full text-left hover:text-blue-400"
        >
          Selling History
        </button>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 p-10 bg-gray-100">

        {/* DASHBOARD SECTION */}
        {activeSection === "dashboard" && (
          <div className="p-8">
            <h1 className="text-3xl font-bold mb-6 text-center">
              Welcome to Seller Dashboard
            </h1>

            <h2 className="text-xl font-semibold mb-4">Your Product Overview</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {exampleProducts.map((product) => (
                <div
                  key={product.id}
                  className="bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition cursor-pointer"
                >
                  <div className="flex items-center justify-center mb-4">
                    {product.icon}
                  </div>

                  <h3 className="text-lg font-medium">{product.title}</h3>
                  <p className="text-gray-600">{product.price}</p>

                  <p
                    className={`mt-2 font-semibold ${
                      product.status === "Active"
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    Status: {product.status}
                  </p>

                  <p className="mt-1 text-sm text-gray-500">
                    Duration Left: {product.durationLeft}
                  </p>

                  <button className="mt-4 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition">
                    View Details
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* PRODUCT LISTINGS SECTION */}
      {/* PRODUCT LISTINGS SECTION */}
{activeSection === "products" && (
  <form onSubmit={handleSubmit} className="space-y-6 w-full max-w-4xl mx-auto">

    {/* Image Upload Box */}
    <div
      className="border-2 border-dashed border-gray-400 p-6 rounded-lg text-center cursor-pointer hover:bg-gray-200 transition"
      onClick={() => document.getElementById("productImage").click()}
    >
      {imagePreview ? (
        <img
          src={imagePreview}
          className="mx-auto h-48 object-cover rounded-lg shadow"
        />
      ) : (
        <p className="text-gray-600">Click to Upload Product Image</p>
      )}

      <input
        id="productImage"
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleImageUpload}
      />
    </div>

    {/* Product Name */}
    <input
      type="text"
      placeholder="Product Name"
      value={name}
      onChange={(e) => setName(e.target.value)}
      className="border px-4 py-3 w-full rounded"
      required
    />

    {/* Description */}
    <textarea
      placeholder="Description"
      value={description}
      onChange={(e) => setDescription(e.target.value)}
      className="border px-4 py-3 w-full rounded h-32 resize-none"
      required
    />

    {/* Duration Panel */}
    <div>
      <p className="text-gray-700 font-semibold mb-1">Duration</p>

      <div
        className="border px-4 py-3 w-full rounded cursor-pointer hover:bg-gray-200 transition"
        onClick={() => setShowDatePicker(true)}
      >
        {durationLabel || "Select Duration (Click to choose date & time)"}
      </div>

      {showDatePicker && (
        <div className="mt-3 p-4 border rounded bg-white shadow-lg">
          <input
            type="date"
            className="border px-3 py-2 rounded mb-2 w-full"
            onChange={(e) => setDurationDate(e.target.value)}
          />

          <input
            type="time"
            className="border px-3 py-2 rounded mb-2 w-full"
            onChange={(e) => setDurationTime(e.target.value)}
          />

          <div className="flex gap-3 mt-2">
            <button
              type="button"
              className="px-4 py-2 bg-gray-800 text-white rounded"
              onClick={applyDuration}
            >
              Apply
            </button>

            <button
              type="button"
              className="px-4 py-2 bg-red-500 text-white rounded"
              onClick={() => setShowDatePicker(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>

    {/* Upload Button */}
    <button
      type="submit"
      className="bg-black text-white px-6 py-3 rounded w-fit"
    >
      Upload Product
    </button>
  </form>
)}


        {/* SELLING HISTORY SECTION */}
     {activeSection === "sellingHistory" && (
  <>
    <h1 className="text-3xl font-bold text-center mb-10">
      Selling History
    </h1>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {[
        {
          id: 1,
          product: "Wireless Headphones",
          date: "12 Jan 2025",
          progress: 100,
          status: "Delivered",
          buyer: "BUYER-9834",
        },
        {
          id: 2,
          product: "Gaming Mouse",
          date: "08 Jan 2025",
          progress: 65,
          status: "In Transit",
          buyer: "BUYER-2211",
        },
        {
          id: 3,
          product: "Portable Speaker",
          date: "05 Jan 2025",
          progress: 25,
          status: "Processing",
          buyer: "BUYER-4529",
        },
      ].map((item) => (
        <div
          key={item.id}
          className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition cursor-pointer border border-gray-200"
        >
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            {item.product}
          </h2>

          <p className="text-sm text-gray-600 mb-1">
            Sold on: <span className="font-medium">{item.date}</span>
          </p>

          <p className="text-sm text-gray-600 mb-1">
            Buyer ID: <span className="font-medium">{item.buyer}</span>
          </p>

          <p className="text-sm text-gray-600 mb-3">
            Delivery Progress:{" "}
            <span className="font-medium text-blue-600">
              {item.progress}%
            </span>
          </p>

          <div className="w-full bg-gray-200 h-2 rounded-full mb-3">
            <div
              className={`h-2 rounded-full ${
                item.progress === 100
                  ? "bg-green-600"
                  : item.progress > 50
                  ? "bg-blue-500"
                  : "bg-yellow-500"
              }`}
              style={{ width: `${item.progress}%` }}
            ></div>
          </div>

          <p
            className={`mt-2 font-semibold ${
              item.status === "Delivered"
                ? "text-green-700"
                : item.status === "In Transit"
                ? "text-blue-600"
                : "text-yellow-600"
            }`}
          >
            Status: {item.status}
          </p>
        </div>
      ))}
    </div>
  </>
)}
</main>
{/*Selling Range*/}
{/* SELLING RANGE SECTION (FULL SCREEN + INDIA MAP + SMOOTH QUAD) */}
{activeSection === "sellingRange" && (
  
  <div className="p-8 w-full">

    <h1 className="text-3xl font-bold text-center mb-8">
      Set Your Selling Range
    </h1>

    {/* Main container */}
    <div className="w-full bg-white rounded-xl shadow p-6">

      {/* Select State */}
      <label className="block mb-2 font-semibold text-gray-800">
        Select State(s)
      </label>
      <select
        multiple
        value={selectedStates}
        onChange={(e) =>
          setSelectedStates(
            [...e.target.selectedOptions].map((o) => o.value)
          )
        }
        className="border px-4 py-2 w-full mb-4 rounded"
      >
        {indianStates.map((s) => (
          <option key={s}>{s}</option>
        ))}
      </select>

      {/* Select City */}
      <label className="block mb-2 font-semibold text-gray-800">
        Select City (Optional)
      </label>
      <input
        type="text"
        value={selectedCity}
        onChange={(e) => setSelectedCity(e.target.value)}
        placeholder="Enter city name"
        className="border px-4 py-2 w-full mb-6 rounded"
      />

      {/* FULL SCREEN INTERACTIVE MAP */}
      <div className="w-full flex justify-center">

        <MapWithFreeformQuad
          width={1000}
          height={650}
          selectedState={selectedStates[0] || null}
          onSave={(points) => {
            console.log("Saved polygon vertices:", points);
            alert("Selling range shape saved!");
          }}
        />
      </div>

      {/* Save Button */}
      <div className="mt-6 w-full">
        <button
          onClick={() => {
            const e = new CustomEvent("selling-range-save");
            window.dispatchEvent(e);
          }}
          className="bg-black text-white px-6 py-3 w-full rounded-lg hover:bg-gray-800 transition"
        >
          Save Selling Range
        </button>
      </div>

    </div>
  </div>
)}

  {/* Bottom Taskbar */}
      <div className="fixed bottom-0 left-0 w-full bg-gray-800 text-white px-6 py-3 flex justify-center gap-6 shadow-inner z-50">

        <button className="text-sm hover:text-blue-400 transition">Feature 2</button>
        <button className="text-sm hover:text-blue-400 transition">Feature 3</button>
        <button
  className="text-sm hover:text-blue-400 transition"
  onClick={() => setActiveSection("sellingRange")}
>
  Selling Range
</button>
      </div>

    </div>
  );
}
