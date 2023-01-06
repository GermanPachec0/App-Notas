export interface User {
    idUsuario: number;
    nombre:    string;
    apellido:  string;
    email:     string;
    username:  string;
    password:  string;
    roles:     Role[];
    notas:     any[];
}

export interface Role {
    id:     number;
    nombre: string;
}
