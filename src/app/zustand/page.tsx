'use client'
import { useStore } from "./store";

export default function Home() {
  const { user, users, setUser, addUser } = useStore(); // Agora o Zustand gerencia todo o estado

  const saveUser = () => {
    if (user.name?.trim() !== '' && user.age?.trim() !== '') {
      addUser(user); // Adiciona o novo usuário ao estado do store
      setUser({ name: "", age: "" }); // Limpa o formulário dentro do store
    }
  };

  return (
    <div className="min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      {/* Fixed Form */}
      
      <div className="fixed top-0 left-0 right-0 p-8 bg-white shadow-md z-10">
      {JSON.stringify(user)}
        <div className="gap-2 flex flex-col items-center w-full">
          <form onSubmit={(e) => { e.preventDefault(); saveUser(); }}>
            <input
              type="text"
              className="w-full p-4 text-lg border border-gray-300 rounded-md"
              placeholder="Enter your name"
              value={user.name}
              onChange={(e) =>
                setUser({ ...user, name: e.target.value })
              }
            />
            <input
              type="number"
              className="w-full p-4 text-lg border border-gray-300 rounded-md"
              placeholder="Enter your age"
              value={user.age}
              onChange={(e) =>
                setUser({ ...user, age: e.target.value })
              }
            />
            <button
              className="p-4 text-lg text-white bg-blue-500 rounded-md"
              type="submit"
            >
              Save
            </button>
          </form>
        </div>
      </div>

      {/* List with Scrollable Feed */}
      <div className="pt-[200px]">
        <UsersList />
      </div>
    </div>
  );
}

function UsersList() {
  const { removeUser, users } = useStore(); // Agora o removeUser também vem do store

  return (
    <div className="grid grid-cols-1 gap-4 w-full max-h-[calc(100vh-200px)] overflow-y-auto">
      {users.map((user, index) => (
        <div key={index} className="p-4 text-lg bg-gray-100 w-full rounded-md">
          <p>Name: {user.name}</p>
          <p>Age: {user.age}</p>
          <span
            onClick={() => removeUser(index)}
            className="cursor-pointer text-red-500"
          >
            x
          </span>
        </div>
      ))}
    </div>
  );
}