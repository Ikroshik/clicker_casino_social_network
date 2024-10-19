import { Table, Column, Model, DataType } from 'sequelize-typescript';

export enum userStatus {
    ONLINE = "ONLINE",
    OFFLINE = "OFFLINE"
}

@Table
export class User extends Model {
    @Column
    email: string;

    @Column
    password: string;

    @Column
    username: string;

    @Column({
        defaultValue: userStatus.OFFLINE,
        type: DataType.ENUM(...Object.values(userStatus))
    })
    status: userStatus;

    @Column
    profile_photo: string

    @Column(DataType.TEXT)
    bio: string

    @Column
    last_seen: Date
}