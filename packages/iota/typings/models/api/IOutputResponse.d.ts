import type { OutputTypes } from "../outputs/outputTypes";
/**
 * Details of an output.
 */
export interface IOutputResponse {
    /**
     * The message id the output was contained in.
     */
    messageId: string;
    /**
     * The transaction id for the output.
     */
    transactionId: string;
    /**
     * The index for the output.
     */
    outputIndex: number;
    /**
     * Is the output spent.
     */
    isSpent: boolean;
    /**
     * The output.
     */
    output: OutputTypes;
}
