import { ITypeBase } from "./ITypeBase";
/**
 * Message layout.
 */
export interface IMessage {
    /**
     * The network id of the message.
     */
    networkId?: string;
    /**
     * The parent message ids.
     */
    parents?: string[];
    /**
     * The payload contents.
     */
    payload?: ITypeBase<number>;
    /**
     * The nonce for the message.
     */
    nonce?: string;
}
