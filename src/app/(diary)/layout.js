import Header from '../components/Header';

export default function DiaryLayout({ children }) {
  return (
    <>
      <Header />
      <main>
        {children}
      </main>
    </>
  );
}
