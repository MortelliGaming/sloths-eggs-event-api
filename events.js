
const slothsEggsEvents = {
    // Important Game Events
    
    // PlayerRegistered
    'A.f90c7d67bb1e8145.SlothsEggs.PlayerEnteredRound': {
        address: '',
        username: ''
    },
    // Bud Airdrop Claimed
    'A.f90c7d67bb1e8145.SlothsEggsBudAirdrop.PlayerClaimedBudAirdrop': {
        address: '',
        budAmount: 0,
    },
    // Bud Airdrop Bonus Claimed
    'A.f90c7d67bb1e8145.SlothsEggsBudAirdrop.PlayerClaimedBudAirdropBonus': {
        address: '',
        budAmount: 0,
    },
    // Bushmen Level Up
    'A.f90c7d67bb1e8145.SlothsEggsBushmen.PlayerUpgradedBushmen': {
        address: '',
        upgradedLevels: {},
        newBushmenLevels: [0,0,0,0,0,0,0,0],
        budCost: 0
    },
    // Sloths Level Up 
    'A.f90c7d67bb1e8145.SlothsEggsSloths.PlayerUpgradedSloths': {
        address: '',
        upgradedLevels: {},
        newSlothsLevels: [0,0,0,0,0,0,0,0],
        budCost: 0,
        flowCost: 0,
    },
    // Bushman Booster Bought
    'A.f90c7d67bb1e8145.SlothsEggsBushmen.PlayerBoughtBushmenBooster': {
        address: '',
        boosterIndex: 0,
        flowCost: 0,
        previousOwnerAddress: '',
        previousOwnerPayback: 0
    },
    // Sloth Booster Bought
    'A.f90c7d67bb1e8145.SlothsEggsSloths.PlayerBoughtSlothsBooster': {
        address: '',
        boosterIndex: 0,
        flowCost: 0,
        previousOwnerAddress: '',
        previousOwnerPayback: 0
    },
    // Perk-Machine Upgrade Started
    'A.f90c7d67bb1e8145.SlothsEggsAttackPerks.PlayerStartedPerkProductionMachineUpgrade': {
        address: '',
        toLevel: 0,
        endTime: 0,
    },
    // Perk-Production Started 
    'A.f90c7d67bb1e8145.SlothsEggsAttackPerks.PlayerStartedPerkProduction': {
        address: '',
        perkIndex: -1,
        endTime: 0,
    },
    // Bud Pool Stake Added
    'A.f90c7d67bb1e8145.SlothsEggsBudStake.PlayerAddedBudsToStake': {
        address: '',
        budAmount: 0
    },

    // Boss Attacked
    'A.f90c7d67bb1e8145.SlothsEggsBoss.PlayerAttackedBoss': {
        address: '',
        eggAmount: 0,
        playerPower: 0,
        bossInitialHP: 0, 
        bossPower: 0, 
        bossNewHP: 0
    },
    // Boss Killed
    'A.f90c7d67bb1e8145.SlothsEggsBoss.PlayerKilledBoss': {
        address: '',
        totalReward: 0,
        killRewardAmount: 0,
        playerRewards: {},
        playerPowers: {},
        bossTotalPower: 0
    },
    // Player Attacked
    'A.f90c7d67bb1e8145.SlothsEggsPvP.PlayerAttackedPlayer': {
        attackerAddress: '',
        defenderAddress: '',
        attackerInitialEggCount: 0,
        defenderInitialEggCount: 0,
        attackerEggCount: 0,
        defenderEggCount: 0,
        attackerPower: 0,
        defenderPower: 0,
        defenderRemainingEggs: 0,
        attackerStolenBuds: 0,
        usedPerkIndex: -1
    },
    // Sponsor bought (shows payment to old holder and dev)
    'A.f90c7d67bb1e8145.SlothsEggsSponsor.PlayerBoughtSponsor': {
        address: '', 
        payedAmount: 0, 
        oldHolderAmount: 0, 
        oldHolder: '', 
        devAmount: 0, 
        newPrice: 0
    },

    // Round Ended
    'A.f90c7d67bb1e8145.SlothsEggs.RoundEnded': {
        address: '',
        reward: 0
    },
    // Bud Pool Distributed
    'A.f90c7d67bb1e8145.SlothsEggsBudStake.PrizePoolDistributed': {
        totalBudsBalance: 0,
        totalFlowBalance: 0,
        distributorFlowAmount: 0,
        playerBudStakes: {},
        playerRewards: {}
    },
    // Top Player Pool Distributed
    'A.f90c7d67bb1e8145.SlothsEggs.TopPlayerPoolDistributed': {
        totalPoolValue: 0, 
        playerRewards: {}, 
        playerPositions: {}
    },
    // ReserveVault Deposit (includes sponsor and dev payment)
    'A.f90c7d67bb1e8145.SlothsEggsPrizePools.FlowDepositToReserveVault': {
        devAmount: 0, 
        sponsorAmount: 0, 
        reserveVaultAmount: 0
    },
    // ReserveVault Drip
    'A.f90c7d67bb1e8145.SlothsEggsPrizePools.FlowDrippedFromReserve': {
        topBudProductionPool: 0, 
        bossKillPool: 0, 
        budStakingPool: 0
    },
}

module.exports = slothsEggsEvents