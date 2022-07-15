import { useEffect, useMemo, useState } from 'react';

import { CellActionsFormatter } from '../src/Components/ActionsFormater';
import ConfirmDeletePost from '../src/Components/ConfirmDeletePost';
import DataGrid from 'react-data-grid';
import Head from 'next/head';
import Link from 'next/link';
import styled from 'styled-components';
import { useRouter } from 'next/router';

const Unauthorized = styled.div`
  width: 100%;
  height: 100vh;
  background: #f3f3f3;
  display: flex;
  justify-content: center;
  align-items: center;
`;

Unauthorized.Text = styled.h1`
  color: #000000;
  font-size: 1.7rem;
  font-weight: 700;
`;

const AdminSection = styled.div`
  width: 100%;
  height: calc(100vh - 100px);
  padding: 50px;
  background: #f3f3f3;
  display: flex;
  justify-content: center;
  align-items: center;
`;

AdminSection.Button = styled.button`
  width: 300px;
  height: 50px;
  padding: 10px 25px;
  color: #fff;
  background-color: #2196f3;
  border: none;
  border-radius: 30px;

  &:focus {
    outline: none;
  }
`;

const Root = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  width: 50%;
  gap: 10px;
  > .rdg {
    flex: 1;
  }
`;

const Toolbar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const FilterContainer = styled.div`
  display: flex;
  height: inherit;
  align-items: center;
`;

const Filter = styled.input`
  width: 100%;
  padding: 4px;
  font-size: 1rem;
`;

const FiltersButton = styled.button`
  color: #ffffff;
  background: #0000ff;
  border: none;
  border-radius: 10px;
  width: auto;
  height: 50px;
  padding: 10px 20px;
  margin: 0 20px;
  font-weight: 700;
  font-size: 1.2rem;
`;

const LogoutButton = styled.button`
  color: #ffffff;
  background: #ff0000;
  border: none;
  border-radius: 10px;
  width: auto;
  height: 50px;
  padding: 10px 20px;
  margin: 0 20px;
  font-weight: 700;
  font-size: 1.2rem;
`;

function AdminComp({ posts }) {
  const [logged, setLogged] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [enableFilterRow, setEnableFilterRow] = useState(true);
  const [filters, setFilters] = useState({
    title: '',
    date: '',
  });

  const router = useRouter();

  const refreshData = () => {
    router.replace(router.asPath);
  };

  const filteredRows = useMemo(() => {
    return posts.filter((post) => {
      return (
        (filters.title ? post.title.includes(filters.title) : true) &&
        (filters.date ? post.date.includes(filters.date) : true)
      );
    });
  }, [posts, filters]);

  const actions = [
    {
      icon: '🗑️',
      async callback(row) {
        ConfirmDeletePost(row, refreshData);
      },
    },
  ];

  const columns = useMemo(() => {
    return [
      {
        key: 'title',
        name: 'Title',
        filterRenderer: (p) => (
          <FilterContainer>
            <Filter value={p.value} onChange={(e) => p.onChange(e.target.value)} />
          </FilterContainer>
        ),
      },
      {
        key: 'date',
        name: 'Date',
        filterRenderer: (p) => (
          <FilterContainer>
            <Filter value={p.value} onChange={(e) => p.onChange(e.target.value)} />
          </FilterContainer>
        ),
      },
      {
        key: '',
        name: '',
        formatter({ row }) {
          return (
            <>
              <CellActionsFormatter actions={actions} row={row} />
            </>
          );
        },
      },
    ];
  }, [posts]);

  function clearFilters() {
    setFilters({
      title: '',
    });
  }

  function toggleFilters() {
    setEnableFilterRow(!enableFilterRow);
  }

  useEffect(() => {
    const value = sessionStorage.getItem(process.env.LOGGED_KEY);
    value === process.env.LOGGED_VALUE ? setLogged(true) : setLogged(false);
    setIsLoading(false);
  }, []);

  function logout() {
    sessionStorage.removeItem(process.env.LOGGED_KEY);
    router.push('/');
  }

  return (
    <>
      <Head>
        <meta name="robots" content="noIndex" />
        <meta httpEquiv="language" content="en" />
      </Head>

      {isLoading && (
        <Unauthorized>
          <Unauthorized.Text>Loading...</Unauthorized.Text>
        </Unauthorized>
      )}

      {!logged && !isLoading && (
        <Unauthorized>
          <Unauthorized.Text>
            You are not authorized to access this page! Please,{' '}
            <Link href="/login">
              <a>log in.</a>
            </Link>{' '}
          </Unauthorized.Text>
        </Unauthorized>
      )}

      {logged && !isLoading && (
        <AdminSection>
          <Root>
            <Toolbar>
              <FiltersButton type="button" onClick={toggleFilters}>
                Toggle Filters
              </FiltersButton>{' '}
              <FiltersButton type="button" onClick={clearFilters}>
                Clear Filters
              </FiltersButton>
              <FiltersButton
                type="button"
                onClick={() => {
                  router.push('/post/create');
                }}
              >
                Create New Post
              </FiltersButton>
              <LogoutButton type="button" onClick={logout}>
                Logout
              </LogoutButton>
            </Toolbar>

            <DataGrid
              columns={columns}
              rows={filteredRows}
              enableFilterRow={enableFilterRow}
              filter={filters}
              onFiltersChange={setFilters}
            />
          </Root>
        </AdminSection>
      )}
    </>
  );
}

export default AdminComp;

export async function getServerSideProps() {
  const posts = await fetch('https://borgfy.vercel.app/api/posts')
    .then((res) => {
      if (res.ok) {
        return res.json();
      }

      throw new Error('Erro ao carregar os dados!');
    })
    .catch((err) => err);

  return {
    props: { posts },
  };
}
