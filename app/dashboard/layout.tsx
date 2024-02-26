import AdminLayout from "../components/Layout/AdminLayout";

export default function Dashboard({ children }: { children: React.ReactNode }) {
  return <AdminLayout>{children}</AdminLayout>;
}
