// Copyright 2020 IOTA Stiftung
// SPDX-License-Identifier: Apache-2.0
import type { IMessage, IMessageMetadata, IOutputResponse } from "@iota/iota.js";
import type { IMqttMilestoneResponse } from "./api/IMqttMilestoneResponse";
import type { IMqttStatus } from "./IMqttStatus";

/**
 * Client interface definition for API communication.
 */
export interface IMqttClient {
    /**
     * Subscribe to the latest milestone updates.
     * @param callback The callback which is called when new data arrives.
     * @returns A subscription Id which can be used to unsubscribe.
     */
    milestonesLatest(callback: (topic: string, data: IMqttMilestoneResponse) => void): string;

    /**
     * Subscribe to the latest confirmed milestone updates.
     * @param callback The callback which is called when new data arrives.
     * @returns A subscription Id which can be used to unsubscribe.
     */
    milestonesConfirmed(callback: (topic: string, data: IMqttMilestoneResponse) => void): string;

    /**
     * Subscribe to metadata updates for a specific message.
     * @param messageId The message to monitor.
     * @param callback The callback which is called when new data arrives.
     * @returns A subscription Id which can be used to unsubscribe.
     */
    messageMetadata(messageId: string, callback: (topic: string, data: IMessageMetadata) => void): string;

    /**
     * Subscribe to message updates for a specific transactionId.
     * @param transactionId The message to monitor.
     * @param callback The callback which is called when new data arrives.
     * @returns A subscription Id which can be used to unsubscribe.
     */
    transactionIncludedMessageRaw(transactionId: string, callback: (topic: string, data: Uint8Array) => void): string;

    /**
     * Subscribe to message updates for a specific transactionId.
     * @param transactionId The message to monitor.
     * @param callback The callback which is called when new data arrives.
     * @returns A subscription Id which can be used to unsubscribe.
     */
    transactionIncludedMessage(
        transactionId: string,
        callback: (topic: string, data: IMessage, raw: Uint8Array) => void
    ): string;

    /**
     * Subscribe to updates for a specific output.
     * @param outputId The output to monitor.
     * @param callback The callback which is called when new data arrives.
     * @returns A subscription Id which can be used to unsubscribe.
     */
    output(outputId: string, callback: (topic: string, data: IOutputResponse) => void): string;

    /**
     * Subscribe to the output with specific unlock condition and address.
     * @param condition The condition to monitor.
     * @param addressBech32 The address to monitor.
     * @param callback The callback which is called when new data arrives.
     * @returns A subscription Id which can be used to unsubscribe.
     */
    outputByConditionAndAddress(
        condition: string,
        addressBech32: string,
        callback: (topic: string, data: IOutputResponse) => void
    ): string;

    /**
     * Subscribe to the spent outputs with specific unlock condition and address.
     * @param condition The condition to monitor.
     * @param addressBech32 The address to monitor.
     * @param callback The callback which is called when new data arrives.
     * @returns A subscription Id which can be used to unsubscribe.
     */
    outputSpentByConditionAndAddress(
        condition: string,
        addressBech32: string,
        callback: (topic: string, data: IOutputResponse) => void
    ): string;

    /**
     * Subscribe to get all messages in binary form.
     * @param callback The callback which is called when new data arrives.
     * @returns A subscription Id which can be used to unsubscribe.
     */
    messagesRaw(callback: (topic: string, data: Uint8Array) => void): string;

    /**
     * Subscribe to get all messages in object form.
     * @param callback The callback which is called when new data arrives.
     * @returns A subscription Id which can be used to unsubscribe.
     */
    messages(callback: (topic: string, data: IMessage, raw: Uint8Array) => void): string;

    /**
     * Subscribe to get all messages for the specified tag in binary form.
     * @param tag The tag to monitor as bytes or in UTF8.
     * @param callback The callback which is called when new data arrives.
     * @returns A subscription Id which can be used to unsubscribe.
     */
    taggedRaw(tag: Uint8Array | string, callback: (topic: string, data: Uint8Array) => void): string;

    /**
     * Subscribe to get all messages for the specified tag in object form.
     * @param tag The tag to monitor as bytes or in UTF8.
     * @param callback The callback which is called when new data arrives.
     * @returns A subscription Id which can be used to unsubscribe.
     */
    tagged(tag: Uint8Array | string, callback: (topic: string, data: IMessage, raw: Uint8Array) => void): string;

    /**
     * Subscribe to get the metadata for all the messages.
     * @param callback The callback which is called when new data arrives.
     * @returns A subscription Id which can be used to unsubscribe.
     */
    messagesMetadata(callback: (topic: string, data: IMessageMetadata) => void): string;

    /**
     * Subscribe to another type of message as raw data.
     * @param customTopic The topic to subscribe to.
     * @param callback The callback which is called when new data arrives.
     * @returns A subscription Id which can be used to unsubscribe.
     */
    subscribeRaw(customTopic: string, callback: (topic: string, data: Uint8Array) => void): string;

    /**
     * Subscribe to another type of message as json.
     * @param customTopic The topic to subscribe to.
     * @param callback The callback which is called when new data arrives.
     * @returns A subscription Id which can be used to unsubscribe.
     */
    subscribeJson<T>(customTopic: string, callback: (topic: string, data: T) => void): string;

    /**
     * Remove a subscription.
     * @param subscriptionId The subscription to remove.
     */
    unsubscribe(subscriptionId: string): void;

    /**
     * Subscribe to changes in the client state.
     * @param callback Callback called when the state has changed.
     * @returns A subscription Id which can be used to unsubscribe.
     */
    statusChanged(callback: (status: IMqttStatus) => void): string;
}
