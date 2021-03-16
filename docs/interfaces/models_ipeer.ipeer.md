[@iota/iota.js](../README.md) / [models/IPeer](../modules/models_ipeer.md) / IPeer

# Interface: IPeer

[models/IPeer](../modules/models_ipeer.md).IPeer

Peer details.

## Table of contents

### Properties

- [alias](models_ipeer.ipeer.md#alias)
- [connected](models_ipeer.ipeer.md#connected)
- [gossip](models_ipeer.ipeer.md#gossip)
- [id](models_ipeer.ipeer.md#id)
- [multiAddresses](models_ipeer.ipeer.md#multiaddresses)
- [relation](models_ipeer.ipeer.md#relation)

## Properties

### alias

• `Optional` **alias**: *undefined* \| *string*

The alias of the peer.

___

### connected

• **connected**: *boolean*

Is it connected.

___

### gossip

• `Optional` **gossip**: *undefined* \| { `heartbeat?`: *undefined* \| [*IGossipHeartbeat*](models_igossipheartbeat.igossipheartbeat.md) ; `metrics`: [*IGossipMetrics*](models_igossipmetrics.igossipmetrics.md)  }

Gossip metrics for the peer.

___

### id

• **id**: *string*

The id of the peer.

___

### multiAddresses

• **multiAddresses**: *string*[]

The addresses of the peer.

___

### relation

• **relation**: *string*

The relation of the peer.
