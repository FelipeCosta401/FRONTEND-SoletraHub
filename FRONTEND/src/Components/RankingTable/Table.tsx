import { FunctionComponent, useEffect, useState } from "react";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";

import { Star } from "lucide-react";

import Avatar from "../UserDefaultAvatar/Avatar";

interface RankingTableProps {
  props: any[];
}

const RankingTable: FunctionComponent<RankingTableProps> = ({ props }) => {
  const [users, setUsers] = useState<any[]>([]);
  useEffect(() => {
    const updatedUsers = props.map((user, index) => ({
      ...user,
      rank: index + 1,
    }));
    setUsers(updatedUsers);
  }, [props]);

  return (
    <>
      <div className="w-[600px] max-[770px]:w-full mx-auto border ">
        <Table>
          <TableHeader className="bg-roxoLogo-std">
            <TableHead>
              <span className="flex items-center text-white font-bold">
                <Star />
                Rank
              </span>
            </TableHead>
            <TableHead>
              <p className="text-white font-bold text-start">Nick</p>
            </TableHead>
            <TableHead>
              <p className="text-white font-bold text-center">Jogos</p>
            </TableHead>
            <TableHead>
              <p className="text-white font-bold text-center">Pontuação</p>
            </TableHead>
          </TableHeader>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.rank}>
                <TableCell align="center" onClick={() => console.log(users)}>
                  <p className="font-bold text-lg text-tDark">{user.rank}</p>
                </TableCell>
                <TableCell align="center">
                  <span className="flex items-center gap-2">
                    {user.avatar ? (
                      <img src={user.avatar} />
                    ) : (
                      <div className="w-10 h-10 overflow-hidden flex justify-center items-center rounded-full">
                        <Avatar name={user.name} mini />
                      </div>
                    )}
                    <p className="font-bold text-lg text-tDark">{user.name}</p>
                  </span>
                </TableCell>
                <TableCell align="center">
                  <p className="font-bold text-lg text-tDark">{user.games}</p>
                </TableCell>
                <TableCell align="center">
                  <p className="font-bold text-lg text-tDark">{user.points}</p>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </>
  );
};

export default RankingTable;
