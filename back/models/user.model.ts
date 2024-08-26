import * as mongoose from "mongoose";
import {Schema, Document} from "mongoose";
import {TitleProps} from "./title.model";
import {ArtistProps} from "./artist.model";
import {SubsProps} from "./subs.model";

export interface UserProps {
    _id: string;
    address: string;
    lastname: string;
    firstname: string;
    email: string;
    banned: boolean;
    like: TitleProps[];
    follow: ArtistProps[];
    subscription: SubsProps;
    role: string[];
}

export type UserDocument = UserProps & Document;

const userSchema = new Schema(
    {
        address: {
            type: Schema.Types.String,
            required: true,
            unique: true,
        },
        firstname: {
            type: Schema.Types.String,
            // required: true,
        },
        lastname: {
            type: Schema.Types.String,
            // required: true,
        },
        banned: {
            type: Schema.Types.Boolean,
            default: false,
            required: true,
        },
        like: [
            {
                type: Schema.Types.ObjectId,
                ref: "Title",
            },
        ],
        follow: [
            {
                type: Schema.Types.ObjectId,
                ref: "Artist",
            },
        ],
        subscription: {
            type: Schema.Types.ObjectId,
            ref: "Subs",
        },
        role: [
            {
                type: Schema.Types.String,
                default: ["user"],
            },
        ],
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

export const UserModel = mongoose.model<UserDocument>("User", userSchema);
