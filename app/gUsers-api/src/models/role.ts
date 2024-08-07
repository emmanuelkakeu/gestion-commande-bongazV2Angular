// role.ts
export class Role {
  // Définissez les propriétés de la classe Role ici
  // Exemple :
  roleId: number;
  libelle: string;

  constructor(
    roleId: number = 0,
    libelle: string = ''
  ) {
    this.roleId = roleId;
    this.libelle = libelle;
  }
}
