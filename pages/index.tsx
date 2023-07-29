import { GetServerSideProps } from "next";
import { useContext, useEffect } from "react";
import Image from "next/image";
import { NextPage } from "next";
import { Button, Avatar, Container, Stack, Chip } from "@mui/material";
import { Layouts } from "@/src/layouts";
import {
  IRickAndMortyResults,
  IRickAndMortyInfo,
} from "@/src/interfaces/rickAndMorty";
import { useRouter } from "next/navigation";
import { CounterContext } from "@/src/context";
import { postTrickandmorty } from "@/database/dbTrickandmorty";
import styles from "@/styles/RickAndMortyList.module.css";

// apollo
// import { queryrickAndMortyPage } from "@/src/graphql/apollo/queryrickAndMortyPage";

interface Props {
  info: IRickAndMortyInfo;
  results: IRickAndMortyResults[];
}

const rickAndMortyPage: NextPage<Props> = ({ info, results }) => {
  const router = useRouter();
  const { counter, increment, decrement, reset } = useContext(CounterContext);

  useEffect(() => {
    router.push(`/?page=${counter}`);
  }, [counter]);

  return (
    <Layouts title={"Home"} pageDescription={"Home"}>
      <Container>
        <div className={styles.row}>
          <div className={styles.actionsContent}>
            <div className={styles.actionsRow}>
              <h1>Rick And Morty List</h1>
            </div>
          </div>
          <div className={styles.taskContent}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th scope="col">Image</th>
                  <th scope="col">Name</th>
                  <th scope="col">Gender</th>
                  <th scope="col">Species</th>
                  <th scope="col">Status</th>
                </tr>
              </thead>
              <tfoot>
                <tr>
                  <td>
                    <div>
                      <Button color="secondary" onClick={decrement}>
                        <span
                          className="material-symbols-outlined"
                          style={{ cursor: "pointer" }}
                        >
                          arrow_back_ios
                        </span>
                      </Button>
                      <Button color="secondary" onClick={increment}>
                        <span
                          className="material-symbols-outlined"
                          style={{ cursor: "pointer" }}
                        >
                          arrow_forward_ios
                        </span>
                      </Button>
                    </div>
                    <span>{`${info.prev ?? 0}-${info.next} of ${
                      info.pages
                    }`}</span>
                  </td>
                </tr>
              </tfoot>
              <tbody>
                {results.map((item, key) => (
                  <tr key={key}>
                    <td data-label="Image">
                      <Avatar variant="rounded" sx={{ width: 40, height: 40 }}>
                        <Image
                          src={`${item?.image}`}
                          width={40}
                          height={40}
                          alt={item?.name}
                        />
                      </Avatar>
                    </td>
                    <td data-label="Name">{item?.name}</td>
                    <td data-label="Gender">{item?.gender}</td>
                    <td data-label="Species">
                      <Stack direction="row" spacing={1}>
                        <Chip
                          label={item?.species}
                          color={
                            item?.species === "Human" ? "primary" : "error"
                          }
                        />
                      </Stack>
                    </td>
                    <td data-label="Status">{item?.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Container>
    </Layouts>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { page } = ctx.query;
  // apollo
  // const { characters } = await queryrickAndMortyPage(Number(page), "human");

  const { characters } = await postTrickandmorty(Number(page));

  const { count, __typename, ...info } = characters.info;

  return {
    props: { info, results: characters?.results },
  };
};
export default rickAndMortyPage;
