import * as React from 'react'
import FadeIn from 'react-lazyload-fadein'
import { Image, StyleSheet, Text, View } from 'react-native'
import Fade from 'react-reveal/Fade'
import ah from 'src/community/ah-logo-white.png'
import FullCircle from 'src/community/connect/FullCircle'
import polychain from 'src/community/polychain-logo-white.png'
import { H2, H3 } from 'src/fonts/Fonts'
import { I18nProps, NameSpaces, Trans, withNamespaces } from 'src/i18n'
import { Cell, GridRow, Spans } from 'src/layout/GridRow'
import { ScreenProps, ScreenSizes, withScreenSize } from 'src/layout/ScreenSize'
import Rings from 'src/logos/RingsGlyph'
import Button, { BTN, SIZE } from 'src/shared/Button.3'
import menuItems from 'src/shared/menu-items'
import { colors, fonts, standardStyles, textStyles } from 'src/styles'

type Props = ScreenProps & I18nProps
type VoidFunc = () => void

class Growth extends React.PureComponent<Props> {
  render() {
    const { screen, t } = this.props
    const isDesktop = screen === ScreenSizes.DESKTOP
    return (
      <View style={styles.darkBackground}>
        <GridRow
          mobileStyle={standardStyles.sectionMarginTopMobile}
          tabletStyle={standardStyles.sectionMarginTopTablet}
          desktopStyle={standardStyles.sectionMarginTop}
        >
          <Cell span={Spans.three4th}>
            <Fade bottom={true} distance={'20px'}>
              <View>
                <H3 style={textStyles.invert}>{t('growth')}</H3>
                <H2 style={[standardStyles.elementalMarginBottom, textStyles.invert]}>
                  {t('contributeToEcosystem')}
                </H2>
              </View>
            </Fade>
          </Cell>
        </GridRow>
        <View style={[standardStyles.centered, isDesktop ? styles.fullScreen : null]}>
          <View style={[standardStyles.centered, styles.aboveFold]}>
            <View style={circleContainerStyle(screen)}>
              <FadeIn duration={0} unmountIfInvisible={true}>
                {(load: VoidFunc) => <FullCircle init={load} lightBackground={false} />}
              </FadeIn>
            </View>
          </View>
        </View>

        <GridRow
          desktopStyle={standardStyles.blockMarginBottom}
          tabletStyle={standardStyles.blockMarginBottomTablet}
          mobileStyle={standardStyles.blockMarginBottomMobile}
        >
          <Cell span={Spans.half}>
            <View style={styles.fundTitleArea}>
              <H2 style={[standardStyles.elementalMargin, textStyles.invert]}>
                {t('ecoFund.title')}
              </H2>
              <Text style={[fonts.h4, textStyles.invert]}>
                <Trans ns={NameSpaces.community} i18nKey={'ecoFund.poweredBy'}>
                  <Text style={textStyles.italic}>polychain</Text>
                </Trans>
              </Text>
            </View>
          </Cell>
          <Cell span={Spans.half}>
            <Text style={[fonts.p, standardStyles.elementalMargin, textStyles.invert]}>
              {t('ecoFund.description')}
            </Text>
            <View style={[standardStyles.row, standardStyles.elementalMargin, standardStyles.wrap]}>
              <View style={styles.partners}>
                <Text style={[fonts.h6, styles.partnerText, textStyles.invert]}>
                  {t('ecoFund.generalPartner')}
                </Text>
                <Image
                  resizeMode="contain"
                  accessibilityLabel="Polychain"
                  source={{ uri: polychain }}
                  style={styles.polyChain}
                />
              </View>
              <View style={styles.partners}>
                <Text style={[fonts.h6, styles.partnerText, textStyles.invert]}>
                  {t('ecoFund.limitedPartners')}
                </Text>
                <View style={[standardStyles.row, styles.limitedPartners]}>
                  <Rings color={colors.white} height={40} />
                  <Image
                    resizeMode="contain"
                    accessibilityLabel="a16z"
                    source={ah}
                    style={styles.a16z}
                  />
                </View>
              </View>
            </View>
            <View style={[standardStyles.row, standardStyles.elementalMargin]}>
              <Button
                style={styles.button}
                text={t('ecoFund.learn')}
                kind={BTN.NAKED}
                size={SIZE.normal}
                href={menuItems.BUILD.link}
              />
              <Button
                style={styles.button}
                text={t('ecoFund.apply')}
                kind={BTN.NAKED}
                size={SIZE.normal}
                href={menuItems.BUILD.link}
              />
            </View>
          </Cell>
        </GridRow>
      </View>
    )
  }
}

function circleContainerStyle(screen: ScreenSizes) {
  switch (screen) {
    case ScreenSizes.DESKTOP:
      return styles.circleContainerLarge
    case ScreenSizes.TABLET:
      return styles.circleContainerMedium
    default:
      return styles.circleContainer
  }
}

const styles = StyleSheet.create({
  fullScreen: {
    width: '100vw',
  },
  aboveFold: { justifyContent: 'space-around', width: '100%', padding: 20 },
  darkBackground: {
    backgroundColor: colors.dark,
  },
  button: {
    marginVertical: 15,
    marginRight: 30,
  },
  circleContainer: {
    width: '90%',
  },
  circleContainerMedium: {
    width: '70vw',
    maxWidth: '55vh',
  },
  circleContainerLarge: {
    width: 652,
  },
  fundTitleArea: { maxWidth: 428 },
  partners: {
    justifyContent: 'space-between',
  },
  partnerText: {
    marginTop: 20,
    marginBottom: 10,
  },
  limitedPartners: {
    alignItems: 'center',
  },
  polyChain: {
    marginRight: 40,
    marginBottom: 3,
    width: 190,
    height: 35,
  },
  a16z: {
    width: 128,
    height: 35,
    marginHorizontal: 30,
  },
})

export default withNamespaces('community')(withScreenSize(Growth))
