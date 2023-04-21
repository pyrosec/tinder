# tinder

Tinder API CLI tool and TypeScript library

## Installation

```sh

yarn global add https://github.com/pyrosec/tinder
```

## Usage


Authentication to an existing Tinder account

```sh
tinder init
tinder auth-login --phone-number 19701823918
tinder verify-otp --phone-number 19701823918 --otp 858192
tinder verify-email --otp 194818
tinder get-auth-token
```

Create a new Tinder account

```sh
tinder init
tinder auth-login --phone-number 19701823918
tinder verify-otp --phone-number 19701823918 --otp 858192
tinder use-email --email testemail@gmail.com
tinder start-onboarding
tinder set-name --name 'Dave'
tinder set-birth-date --birth-date '01-02-1996'
tinder set-gender --gender 0
tinder set-interested-in-gender --gender 1
tinder set-school --school-id ope_350031 --name 'New York University' --displayed
tinder set-interests
tinder onboarding-autocomplete
tinder get-auth-token
```

Save/load session

```sh
tinder save session1
tinder init
tinder load session1
tinder automatch
```

Automatch

```sh
tinder automatch
```sh

Scrape profiles

```sh
mkdir profiles-out
tinder scrape profiles-out/
```

Consult src.ts/tinder.ts for the full API schema.


## Techniques

Protobuf schemas necessary for communicating with the Tinder API are reversed procedurally. Disassembly produced by apktool is stored on disk then parsed using the scripts included in this repository. On conventional hardware, a complete .proto file can be generated in several hours using these .smali parsers.

For most applications built with protobuf, we find that a .proto file can almost always be extracted using parser/generators similar to ones included here.

Similarly, the JSON API schema was reversed into TypeScript interface definitions, and the HTTP route definitions extracted from DEX labels associated with retrofit2.

To ease the task of replicating a generic API call, frida was used to remove CA pinning using standard CA-unpinning scripts, then network requests captured from a victim Android system.

## Research Findings

Disassembly of the Tinder application results in very little, if any, obfuscated bytecode. Tinder maintainers can benefit from applying obfuscation to their design, similar to the approach used by the Snapchat team, discussed here [https://github.com/pyrosec/snapchat-ssl-unpinning](https://github.com/pyrosec/snapchat-ssl-unpinning)

For social media applications, the threat of automated counterespionage tactic by adversarial intelligence groups is dire, and if there is no protection against data mining, then civilian privacy is at risk. We urge organizations releasing public facing social platforms to invest into the protection of their data to prevent malignant actors from weaponizing it.
