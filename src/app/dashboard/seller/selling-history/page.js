export default function Page() {
  const sellingData = [
    { id: 1, product: 'Wireless Earbuds', date: '2025-07-01' },
    { id: 2, product: 'Smart Watch', date: '2025-07-02' },
    { id: 3, product: 'Portable Charger', date: '2025-07-04' },
    { id: 4, product: 'Gaming Mouse', date: '2025-07-07' },
    { id: 5, product: 'Bluetooth Speaker', date: '2025-07-08' },
    { id: 6, product: 'Mechanical Keyboard', date: '2025-07-10' },
  ];

  return (
    
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Selling History
      </h1>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
  <div className="bg-blue-50 border border-blue-400 rounded-xl p-4 shadow-md ring-2 ring-blue-300 hover:ring-4 transition duration-300">
    <h2 className="text-lg font-semibold text-blue-800">Product Name</h2>
    <p className="text-sm text-blue-600">Delivery Progress: 60%</p>
  </div>
</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        sellingData.map((item) = (
          {sellingData.map((item) => (
  <div
    key={item.id}
    className="bg-blue-900 text-white border-2 border-blue-400 rounded-xl p-6 shadow-lg hover:shadow-blue-500 transition-transform hover:scale-105"
  >
    <h2 className="text-lg font-semibold">Product: {item.product}</h2>
    <p className="text-sm mt-1">Sold on: {item.date}</p>
    <p className="text-sm mt-1">Delivery Progress: 60%</p>
  </div>
))}
        ))
      </div>
    </div>
  );
}


