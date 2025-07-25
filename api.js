import data from './vans.json';

function sleep(ms) {
    return new Promise(resolve => setTimeout(() => resolve(), ms))
}

// export async function getVans(id) {
//     const url = id ? `/api/vans/${id}` : "/api/vans"
//     const res = await fetch(url)
//     if (!res.ok) {
//         throw {
//             message: "Failed to fetch vans",
//             statusText: res.statusText,
//             status: res.status
//         }
//     }
//     const data = await res.json()
//     return data.vans
// }

export async function getVans(id) {
  await sleep(1000); // Сохраняем задержку для имитации
  const vans = data.vans;
  if (id) {
    const van = vans.find(van => van.id === id);
    return van ? { vans: [van] } : { vans: [] };
  }
  return { vans };
}


// export async function getHostVans(id) {
//     const url = id ? `/api/host/vans/${id}` : "/api/host/vans"
//     const res = await fetch(url)
//     if (!res.ok) {
//         throw {
//             message: "Failed to fetch vans",
//             statusText: res.statusText,
//             status: res.status
//         }
//     }
//     const data = await res.json()
//     return data.vans
// }

export async function getHostVans(id) {
  await sleep(1000);
  const vans = data.vans.filter(van => van.hostId === "123"); // Фильтр по hostId
  if (id) {
    const van = vans.find(van => van.id === id);
    return van ? { vans: [van] } : { vans: [] };
  }
  return { vans };
}

// export async function loginUser(creds) {
//     const res = await fetch("/api/login",
//         { method: "post", body: JSON.stringify(creds) }
//     )
//     const data = await res.json()

//     if (!res.ok) {
//         throw {
//             message: data.message,
//             statusText: res.statusText,
//             status: res.status
//         }
//     }
//     return data
// }

export async function loginUser(creds) {
  await sleep(500);
  const { email, password } = creds;
  console.log("Checking user with email:", email, "and password:", password)
  const user = data.users.find(u => u.email === email && u.password === password);
  console.log("Found user:", user)
  if (!user) {
    throw new Error("No user with those credentials found!")
    // return new Response(401, {}, { message: "No user with those credentials found!" });
  }
  localStorage.setItem("loggedin", "true")
  const { password: _, ...safeUser } = user; // Удаляем пароль из ответа
  return { user: safeUser, token: "Enjoy your pizza, here's your tokens." };
}