import { useState } from "react";
import { returnBook } from "../../../pages/Admin/Services/adminServices";

export const ReturnBookForm = () => {
  const [bookingId, setBookingId] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [error, setError] = useState("");

  const handleReturn = async (e) => {
    e.preventDefault();
    setSuccessMsg("");
    setError("");

    try {
      const response = await returnBook(bookingId, {});
      setSuccessMsg(response.data);
      setBookingId("");
    } catch (err) {
      setError("❌ No se pudo registrar la devolución.");
    }
  };

  return (
    <div className="space-y-4 max-w-md">
      <form onSubmit={handleReturn} className="flex gap-4">
        <input
          type="number"
          placeholder="ID del préstamo"
          value={bookingId}
          onChange={(e) => setBookingId(e.target.value)}
          required
          className="input input-bordered border rounded-md p-2 w-full"
        />
        <button type="submit" className="w-100 bg-blue-900 text-white rounded-md hover:bg-blue-700">
          Registrar Devolución
        </button>
      </form>

      {successMsg && <p className="text-green-500">{successMsg}</p>}
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
};