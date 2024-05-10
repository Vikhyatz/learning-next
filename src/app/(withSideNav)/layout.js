import Sidebar from '../components/sidebar'

export default function SideNavLayout({ children }) {
    return (
      <>
      <Sidebar />
      {children}
      </>
    )
  }