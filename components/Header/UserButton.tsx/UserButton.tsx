import { Avatar, Button } from "@mantine/core";
import { RootState } from '@/rtk/store/store';
import Link from "next/link";
import { useSelector } from "react-redux";
import { User } from "@/rtk/services/authApi";

export const UserButton = () =>{
    const photo = null;
    const user = useSelector((state: RootState) => state.auth.user);
    const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);

    return(
        <div className='flex gap-4 items-center'
       // border p-0 px-4 border-default rounded-sm shadow-sm
        >
            <Avatar src={photo} size={50} radius="xl" />
            <div>
                <div className="text-xs">{(isAuthenticated && user )?  user?.username  : 'Гость'}</div>
                <Link href="/auth">
          <Button variant="filled" size='compact-xs'>{isAuthenticated? 'Выйти' : 'Войти'}</Button>
          </Link>
            </div>
        </div>
    )
}