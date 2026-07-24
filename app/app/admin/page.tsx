"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import * as XLSX from "xlsx";

type Lead = {
  _id: string;
  name: string;
  mobile: string;
  service: string;
  message: string;
  status: string;
};

export default function AdminPage() {
  const router = useRouter();

  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [serviceFilter, setServiceFilter] = useState("All");

  useEffect(() => {
    const login = localStorage.getItem(
      "digitaldesk_admin"
    );

    if (!login) {
      router.push("/login");
      return;
    }

    fetchLeads();
  }, [router]);

  const fetchLeads = async () => {
    const res = await fetch("/api/leads");
    const data = await res.json();

    setLeads(data.leads || []);
    setLoading(false);
  };

  const updateStatus = async (
    id: string,
    status: string
  ) => {
    await fetch("/api/leads", {
      method: "PUT",
      headers: {
        "Content-Type":
          "application/json",
      },
      body: JSON.stringify({
        id,
        status,
      }),
    });

    fetchLeads();
  };

  const deleteLead = async (
    id: string
  ) => {
    if (!confirm("Delete this lead?"))
      return;

    await fetch("/api/leads", {
      method: "DELETE",
      headers: {
        "Content-Type":
          "application/json",
      },
      body: JSON.stringify({
        id,
      }),
    });

    fetchLeads();
  };

  const openWhatsApp = (
    lead: Lead
  ) => {
    const msg = `Hello ${lead.name},

Thank you for contacting Digital Desk.

Service: ${lead.service}

We will contact you shortly.

Digital Desk
9696295457`;

    window.open(
      `https://wa.me/91${lead.mobile}?text=${encodeURIComponent(
        msg
      )}`,
      "_blank"
    );
  };

  const exportExcel = () => {
    const worksheet =
      XLSX.utils.json_to_sheet(
        filtered.map((lead) => ({
          Name: lead.name,
          Mobile: lead.mobile,
          Service: lead.service,
          Status: lead.status,
          Message: lead.message,
        }))
      );

    const workbook =
      XLSX.utils.book_new();

    XLSX.utils.book_append_sheet(
      workbook,
      worksheet,
      "Leads"
    );

    XLSX.writeFile(
      workbook,
      "DigitalDesk-Leads.xlsx"
    );
  };

  const services = [
    "All",
    ...new Set(
      leads.map(
        (lead) => lead.service
      )
    ),
  ];

  const filtered = leads.filter(
    (lead) => {
      const matchSearch =
        lead.name
          .toLowerCase()
          .includes(
            search.toLowerCase()
          ) ||
        lead.mobile.includes(
          search
        ) ||
        lead.service
          .toLowerCase()
          .includes(
            search.toLowerCase()
          );

      const matchService =
        serviceFilter === "All"
          ? true
          : lead.service ===
            serviceFilter;

      return (
        matchSearch &&
        matchService
      );
    }
  );

  const newCount = leads.filter(
    (l) => l.status === "New"
  ).length;

  const pendingCount =
    leads.filter(
      (l) =>
        l.status === "Pending"
    ).length;

  const completedCount =
    leads.filter(
      (l) =>
        l.status ===
        "Completed"
    ).length;

  return (
    <main className="min-h-screen bg-gray-100 p-6">

      <div className="max-w-7xl mx-auto">

        <div className="flex justify-between mb-8">

          <h1 className="text-4xl font-bold">
            Digital Desk Admin
          </h1>

          <button
            onClick={() => {
              localStorage.removeItem(
                "digitaldesk_admin"
              );

              router.push(
                "/login"
              );
            }}
            className="bg-red-600 text-white px-5 py-2 rounded-xl"
          >
            Logout
          </button>

        </div>

        <div className="grid md:grid-cols-4 gap-4 mb-8">

          <div className="bg-white p-6 rounded-2xl shadow">
            <h3>Total Leads</h3>
            <p className="text-3xl font-bold">
              {leads.length}
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow">
            <h3>New</h3>
            <p className="text-3xl font-bold text-blue-600">
              {newCount}
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow">
            <h3>Pending</h3>
            <p className="text-3xl font-bold text-orange-500">
              {pendingCount}
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow">
            <h3>Completed</h3>
            <p className="text-3xl font-bold text-green-600">
              {completedCount}
            </p>
          </div>

        </div>

        <div className="bg-white p-6 rounded-3xl shadow">

          <div className="flex flex-col md:flex-row gap-3 mb-6">

            <input
              type="text"
              placeholder="Search Lead..."
              value={search}
              onChange={(e) =>
                setSearch(
                  e.target.value
                )
              }
              className="border p-3 rounded-xl flex-1"
            />

            <select
              value={serviceFilter}
              onChange={(e) =>
                setServiceFilter(
                  e.target.value
                )
              }
              className="border p-3 rounded-xl"
            >
              {services.map(
                (service) => (
                  <option
                    key={service}
                  >
                    {service}
                  </option>
                )
              )}
            </select>

            <button
              onClick={
                exportExcel
              }
              className="bg-green-600 text-white px-5 py-3 rounded-xl"
            >
              Export Excel
            </button>

          </div>

          {loading ? (
            <p>Loading...</p>
          ) : (
            <div className="overflow-x-auto">

              <table className="w-full border">

                <thead>

                  <tr className="bg-gray-100">

                    <th className="p-3 border">
                      Name
                    </th>

                    <th className="p-3 border">
                      Mobile
                    </th>

                    <th className="p-3 border">
                      Service
                    </th>

                    <th className="p-3 border">
                      Status
                    </th>

                    <th className="p-3 border">
                      Actions
                    </th>

                  </tr>

                </thead>

                <tbody>

                  {filtered.map(
                    (lead) => (
                      <tr
                        key={
                          lead._id
                        }
                      >
                        <td className="border p-3">
                          {lead.name}
                        </td>

                        <td className="border p-3">
                          {lead.mobile}
                        </td>

                        <td className="border p-3">
                          {lead.service}
                        </td>

                        <td className="border p-3">

                          <select
                            value={
                              lead.status
                            }
                            onChange={(
                              e
                            ) =>
                              updateStatus(
                                lead._id,
                                e
                                  .target
                                  .value
                              )
                            }
                            className="border p-2 rounded"
                          >
                            <option>
                              New
                            </option>
                            <option>
                              Pending
                            </option>
                            <option>
                              Completed
                            </option>
                          </select>

                        </td>

                        <td className="border p-3 flex gap-2">

                          <button
                            onClick={() =>
                              openWhatsApp(
                                lead
                              )
                            }
                            className="bg-green-600 text-white px-3 py-2 rounded"
                          >
                            WhatsApp
                          </button>

                          <button
                            onClick={() =>
                              deleteLead(
                                lead._id
                              )
                            }
                            className="bg-red-600 text-white px-3 py-2 rounded"
                          >
                            Delete
                          </button>

                        </td>

                      </tr>
                    )
                  )}

                </tbody>

              </table>

            </div>
          )}

        </div>

      </div>

    </main>
  );
}