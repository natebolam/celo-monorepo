import { StackScreenProps } from '@react-navigation/stack'
import * as React from 'react'
import { WithTranslation } from 'react-i18next'
import { StyleSheet } from 'react-native'
import SafeAreaView from 'react-native-safe-area-view'
import { TokenTransactionType } from 'src/apollo/types'
import ExchangeConfirmationCard from 'src/exchange/ExchangeConfirmationCard'
import { Namespaces, withTranslation } from 'src/i18n'
import { navigateHome } from 'src/navigator/NavigationService'
import { Screens } from 'src/navigator/Screens'
import { StackParamList } from 'src/navigator/types'
import TransferConfirmationCard from 'src/send/TransferConfirmationCard'

export interface NavigationPropsWrapper {
  reviewProps: ReviewProps
  confirmationProps: any
}

export interface ReviewProps {
  type: TokenTransactionType
  timestamp: number
  header: string
}

type Props = WithTranslation & StackScreenProps<StackParamList, Screens.TransactionReview>

class TransactionReview extends React.PureComponent<Props> {
  static navigationOptions = { header: null }

  navigateToMain = () => {
    navigateHome()
  }

  getNavigationProps = (): ReviewProps => {
    const { type, timestamp, header } = this.props.route.params.reviewProps

    if (type === undefined || timestamp === undefined) {
      throw new Error('Missing review props')
    }

    return {
      type,
      timestamp,
      header,
    }
  }

  getConfirmationProps = () => {
    const confirmationProps = this.props.route.params.confirmationProps

    if (confirmationProps === undefined) {
      throw new Error('Missing confirmation props')
    }

    return confirmationProps
  }

  renderCard = (type: TokenTransactionType, confirmationProps: any) => {
    switch (type) {
      case TokenTransactionType.Exchange:
        return <ExchangeConfirmationCard {...confirmationProps} />
      default:
        return <TransferConfirmationCard {...confirmationProps} />
    }
  }

  render() {
    const { type } = this.getNavigationProps()
    const confirmationProps = this.getConfirmationProps()

    return (
      <SafeAreaView style={styles.container}>
        {this.renderCard(type, confirmationProps)}
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default withTranslation(Namespaces.global)(TransactionReview)
