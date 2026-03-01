"use client" ; 



export default function RevenuePage() {
 
 
   const dummyRevenueData = [
    { id: 1, product: "Wireless Earbuds", revenue: 12000 },
    { id: 2, product: "Smart Watch", revenue: 16500 },
    { id: 3, product: "Gaming Mouse", revenue: 13900 },
    { id: 4, product: "Bluetooth Speaker", revenue: 13700 },
    { id: 5, product: "Mechanical Keyboard", revenue: 13900 },
    { id: 6, product: "Portable Charger", revenue: 12500 },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
        Revenue by Product
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {dummyRevenueData.map((item) => (
          <div
            key={item.id}
            className="bg-green-100 rounded-xl p-6 shadow hover:shadow-lg transition duration-300"
          >
            <h2 className="text-lg font-semibold text-gray-800">
              Product: {item.product}
            </h2>
            <p className="text-sm text-gray-600">Revenue: ₹{item.revenue}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
