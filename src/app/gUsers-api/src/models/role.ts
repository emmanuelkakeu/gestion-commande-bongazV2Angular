// role.ts
export class Role {
  // Définissez les propriétés de la classe Role ici
  // Exemple :
  roleId: number;
  roleName: string;

  constructor(
    roleId: number = 0,
    roleName: string = ''
  ) {
    this.roleId = roleId;
    this.roleName = roleName;
  }
}
