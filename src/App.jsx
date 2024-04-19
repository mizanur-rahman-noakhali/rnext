// const today = new Date();

// function formatDate(date) {
//   return new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(date);
// }

// export default function App() {
//   return <h1>To Do List for {formatDate(today)}</h1>;
// }
// export default function TodoList() {
//   return (
//     <ul
//       style={{
//         backgroundColor: "black",
//         color: "pink",
//       }}
//     >
//       <li>Improve the videophone</li>
//       <li>Prepare aeronautics lectures</li>
//       <li>Work on the alcohol-fuelled engine</li>
//     </ul>
//   );
// }
const person = {
  name: "Gregorio Y. Zara",
  theme: {
    backgroundColor: "black",
    color: "pink",
  },
};

export default function TodoList() {
  return (
    <div style={person.theme}>
      <h1>{person.name}'s Todos</h1>
      <img
        className="avatar"
        src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEBUQDxIVFRUVFRUVFRUVDxUVFQ8VFRUWFhUVFRUYHSggGBolGxUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGBAQFSseHR0wLy0rLS0tLSsvLTctListLS0rKy0vLSsvLS0rKy0tMC0tKy0tLS4tLSstLS0rLS0rLf/AABEIALcBEwMBIgACEQEDEQH/xAAcAAADAQADAQEAAAAAAAAAAAAAAQIDBAUGBwj/xAA/EAACAQIDBQUEBgkEAwAAAAAAAQIDEQQSIQUGMUFRImFxgZETMrHBByNCodHwFCRSYpKissLhFUNysyUzgv/EABkBAQEBAQEBAAAAAAAAAAAAAAABAgQDBf/EACkRAQACAgICAAQGAwAAAAAAAAABAgMRBBIhMSJBUXEFMmFigeETFEL/2gAMAwEAAhEDEQA/APkaGgSGR5yY0CGkVk0i0hJFIIEUgSKSCAYDQQh2GNBBYaRSQ0gEkNIdh2CBDBIaQTYGkCRSRUKxSGkUkBNh2KsMCUhuJVgUQJyk2NnEloDJxJymzRLiRuGVgcS3Edg1DBxMpxOS0ROIacfKBrYCjqkNANEWTRSQki0ghpDSBDQQ0UIbREDGkJFIrJqJSQolANFJEplIIYJDSLSKztKQ0irDsArDSKsADBDBBBYpISKALDsNIdgqUhtFJBYCMoZS8o7BYZSiQ4m+Um2pG2TgZuJyWjPKGocZxA5LpgFeeRSEikBSRSQIYQ0hgkURAgY0NlSUoq4hXKi0ykzMEyDW5SZjcEwacmLKucbONVeb5fcEmHLRaPO4jaUpO0W4x7vel335Dp00+V31b19Stxil6ILHU4bGShLLO7i+b4rzO2TDFqzUDSEkMMHYpIRSAaKsCRSiFKw0hpDsArDsMAJaIcTWwpRI3DFIlmriRbUNQdhFARp5lFolFpFDRSEikEMaAaIgQXATKkkOwWHcGiE2NszbCm5CzGcpE3KrXOYY+pam++y/PoFzPEwzRt3r73b5hYjy02Jsp1pq91H4n0OlukqlJQpuMWubjq2u88xsuv7JpKKlblabbsm3qlZaJu1nwPdYfbihh4YinBNSbWrlpbooq8n3aeJyZLX34fSw1p1nb5vvPsuph5qNVW006O3NdUcjZtS9KL7rejt8j3W38Msfgqk5QTlCm6lNxhOFnlzRtdu6a7+Z4fCYWVKKhL3mlJpppxzRTs0+5o9sd+0efcOTl4+sRMenJGhIo9XCaKRJSCLRRKKCiKLSEkVEB2DKNDSIqbDlEpAw1DGxDRuZ1FqGkWAuwEaeWRUSEXEoopElxQQ0UJDCEwAAgYgsDCpZDLaIYgZSJuXJEFaTc0oPtK/X0M2Iix48vZ1MPS9j7XhLho7Xv19T2WxaFCWzoQyxqZbyyLV34trvPnWAxHtKWTW6a1vrouK9T3e62Bll4ytlazRqSi15pnHeNe31cU9vMO+lisPHB3jJKLjaTb9yL0bb7kfNNs1YSxFSVLWF0odHGEYwT/lOz37xzo4RUqa7NWq4uV2245nUlbm7tJN87s85h5qUVJc0enHr/wBOTn39VbpANCaOl807lozRQRrFl3MkzRMCrlRZI4hVoaYhoigpskbCwlomRZMkG02ApIAu3k0UiLlxCqRaIRSDMqRRKGAxWGJgAmDZLYDZJLkS5iFOSMmc3ZeHVWrkbsknKTXGytw77tH0vcbdPZmNVSM6EvaUsub9arWqRle0klJW1i014dbLUVnW1h8lZJ+h39Hez9IxwlPxlmk15t3fqdVtbcHDyjJYWlCm1FuMlFQTlFtZZdU1z5X8mmPD0ir5RsfDvLqmm3fwPd7t0W42k5PuzOz7rHUUNnuN1KLTTs01qrOzTPU7Jwzg4rqfPy22+lhp1eM+lWLzUY8lf1t+GX1PLbDrtpw4uOtuvK3r8T6hvnunUxqc6L1pJtfvzaVorvsk/TqeE2TCjSeXMqdbWnKLbSnpx1vlaaWunM98c9cceGY48Z82rWiI8b/pzK6glGMbOSScpJtpt308VZepjY+j4bcbB1qEZRnOlJR7UlLNGT5uUJcPCLSPJbS3edOMp0qsKsYcbQqU5pcM2Sa4eDb58NTopS3X6uDnTS2a00rER8o+3h0nMpEviNMOJpEtGcWWmFVEtIzTLgwLKsSNEUMYmCCwTBhclhsrgIAryqKiQjSIVaGiUMIsCUx3Ih3E2FyWwBsmTBsiTKqZSIkxshlWHc7svtVP+C/qV/ij130fbT/R9o0pN2jVk6E+9VLKHpUVN+Fzxe7svrJrrSf9cD0eGwrlHsO0nHNBr9qHvW/ejJXtzVzq49e0TDxzW66l+h4o6TEtyqZY8213Jc/gczYG0liMNTr8M8FJr9mVu1HyldeRlgaeatJ8keGtOve3kN7cG6NWNaMVKE+y82nbV7eq/pfU6/ATlVmlTj2nLKlfn+C1u+5n0HeDBqrRlTtq12e6Sd1+HmdRuhsxK+IktXeMLrguEpebVvJ9T0rjwzSbWr8UPG2XPF4pW3wy57peypqnD7K4te83q5NLq7s/Pf0iJS2hWtk0yKSgmo5nG7vfi7NH6H2tJKLbaSSbbbtZLi2+R+aNsVVWxOKq0tU51Jwsr5oRT7XhaN/A8Ze8Pru7eO/8VQ9pJtzhBX5zS4/8m/da53N9oUk4SU1ZypVtF9mPs5LK7c3dvxvx4nSYGvTVLCqhJSjHD040+eWTj9bVmuqUeHXN0O+xiyUJzlxVOo9XfKo0KjSb58PVs+hSvXD94cGW/bP9ny/MFyCkz5ytEUREq4VoikQmWmBSY8xFwuBoDFclyI1BXFJk3BsNwbYGbYAeaRaZmi0w00QyEyrhDGSO4AS2MmQEtkNjkSyhMiRTIbDUOz3d/wDc11py/rh+B7DYD0s76NSdvejb3K9Prb3JLmlHi9Dxu7cv1hLrCS+D+R7vdinnpqMff/28zss6Un2Zcr80/vudnEmI3MubkxM6iHu9zMb7OlWw2idOftIpcPZ17yVu72ka3k49T1uyoZYXfF6nzChJ4faVGu86oVUsNNSVnSlN5qWZLSXbyxzJ2tJ8D6lCa5eH4HhkvW1pmvp10palYi0eWlZX+C8XzHkXC2lrGcpXfhovn+HkUqh5tPN727uuvRlCm3d6ZZzqSpedNSUX6Ndx5zdX6NqeGjUr4uqqkpQkpWjlhRhdSk4ttvN2Vq+Kuudz6O5rmeU+kbaip4OpRT7VSnNtX+yk/i/gzdK9rRDN79azL5pudhMtapXh2aTnK1NrSKc+zZcpaRemj89PX7xTf6NWS5UZX/8Aq6a9LnTbrUcyjf3afak39uo/dv4LXxaOfvDNvC4mXVU4rwzK/wAWfRvSK0mI+j5nebX3L52ykybDPlOhaZVzNMq4GiYJmdyoMK0GpEtk3IrW5LZGYTYag7ibJbJlINByGYuQBdOiRQgDWlXHcm4rhGqkGYzuFwi8xLZNxXCm2QxtklWA2QxslhXN2HK2Ih4VP+qZ7TdurHhKeVStdN3hJd8XdefE8Lst/Xw73b+JOPzPX7CfalFtLKr2fPtJcOfG/wDg6+LrcuXlb1D6Jkp1qEsPV92SSVoPsu1lUi/syXFNdDXYG8lWpRpRqxccRJ+yqRlFxtUWjqWf2H7/AIM6bCYpJJX8Xzb5t/nkdjDFKWj1/wAflDNx6Yq2yR6+j0wcm+W1cc+f1e3nUslFPglZt+8ut+pxK2Py+9ZeZ5v2sXpcuCh0R8v/AG/2vrxxP1dxV3koxTc5JW4639FxZ8T3x3olicTfVJuPY5wV7RjbrZ69W31PqWKxdGC7cop20XGT8IrVnndv4OjisqyJNWak4q8WtVbXQ6uLmvefhp/Lj5eHHSIm1/4Ld+r9XGnTd7LtdHLndnM3mhkwFW7u5ODb6tzgtFyRwNn1qmEWWp9bRjpJqCjWw617TSSVSK14JPR81Y5m/NVfobs01KdOzXBq+a67rI+rln4J+z41I8vn7YzPMWmfJda0AkxNgUikyEx3AtsWYlsm4WFuQnIycgTI3DTMZykJszlINQpsDJyADqkBIXI9FAK4BmYMLiAqHclsABEExNjJZWikQ2UyGFheFnapB9JwfpJM9xjcLZqpHSS0f73R+J4GofQqlTNTUv2kpeqv8zdJmJ3CWrExqXXUtvOLtLl+eJ22C267Xt6OOv3nlZLM34l0sHFvVanRlrbNXrMvDDeuG/aI8vZR21UfupLvb+S/EHtCX+5OT7k8q/l19WdDQ2X0nNeEjkf6bLnVl4WXxscc/h1/lp3R+JY/nt28dpxXCKXlx8TfDbSi07W049bcn+UdT/pEre+/u/A32ZszL2ru7VpatZlfhZaHVxOLlw238pcfM5eLPTXzj07entKF07pNaJ3XB8YvrHRady6I6ze/FR9jQowastUlyUY5V5a28md7sfB0ISTlShJc7wUmu/tdOJ0f0mVb4umumHjZLhrWrPTuPfk5JiOuvbkw44mO+3k0y7mVx3PnujTVSG5GSY0wmmqkDkZXC5FiGjkDkZZhOQahbkMzuJzCwuUjOUiXIzlINQvMMyzAFcBACAjZDEADuMkYAxDYgEJjJZUSyGypENlUmz2OAxF8JTl0hb+C8f7TxjO+wFf9UUelRx/v+ZqntLTqF0EcygtTi4c5cHqjvq4LO6wsjnUrNnBwUk1wTOdRelzqq5Ly5kXyNaSOLTkbqR6aeU2c7BztJNcUzxe+2Iz4qL6UKK8Lxz2/nPV0Kh43fONsXKT+1Cm14KCh8YM4eZXxEuziZPdXUJjzGVx3PnO1rmHmMbgQbZicxCHYKq4XES2F0pyJciJTIcgq3IhyJzEuQaiF5gM8wEXTELAAUWCwAAAAAAmAAIlgBURJGTGBVQzn7Oq9hw/eUvVW+QAbx/mhm/5Zdph2cyk7gB3VcNnYUJa3T1OyhVdvz1ADro4svttSma+00AD0eKqNTU6jfOjmpU6v7MnB+E1dffH7wA8eTETil68eZ/yw8ohpAB8R9kwEASVDQAFDM5MACspMhsADcJbE2AEVIABR/9k="
        alt="Gregorio Y. Zara"
      />
      <ul>
        <li>Improve the videophone</li>
        <li>Prepare aeronautics lectures</li>
        <li>Work on the alcohol-fuelled engine</li>
      </ul>
    </div>
  );
}
