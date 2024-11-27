export class StoreType {
    id: number = 0;
    name?: string = ''; // Optional
    createdAt: Date = new Date();
    createdBy?: string = ''; // Optional
    updatedAt?: Date = new Date(); // Optional
    updatedBy?: string = ''; // Optional
    isDelete: boolean = false;
    isActive: boolean = true;
  

  }
  