import { useEffect, useState } from "react";
import { apiClient } from "./apiClient";

function useApiList(path) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let mounted = true;
    apiClient
      .get(path)
      .then((response) => {
        if (mounted) {
          const items = Array.isArray(response.data) ? response.data : [];
          setData(items);
        }
      })
      .catch(() => {
        if (mounted) {
          setError("Unable to load data.");
          setData([]);
        }
      })
      .finally(() => {
        if (mounted) {
          setLoading(false);
        }
      });

    return () => {
      mounted = false;
    };
  }, [path]);

  return { data, loading, error };
}

export function useAdminBookings() {
  return useApiList("/api/admin/bookings");
}

export function useAdminLayouts() {
  return useApiList("/api/admin/layouts");
}

export async function approveBooking(id) {
  await apiClient.put(`/api/admin/bookings/${id}/approve`);
}

export async function rejectBooking(id) {
  await apiClient.put(`/api/admin/bookings/${id}/reject`);
}
