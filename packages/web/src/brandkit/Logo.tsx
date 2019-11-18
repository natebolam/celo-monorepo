import * as React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import Page from 'src/brandkit/Page'
import { H1, H4 } from 'src/fonts/Fonts'
import { I18nProps, NameSpaces, withNamespaces } from 'src/i18n'
import Button, { BTN } from 'src/shared/Button.3'
import { hashNav } from 'src/shared/menu-items'
import { colors, fonts, standardStyles } from 'src/styles'
import LogoLightBg from 'src/logos/LogoLightBg'
import LogoWithBackground from 'src/brandkit/logo/LogoWithBackground'
import Judgement, { Value } from 'src/brandkit/logo/Judgement'
import AspectRatio from 'src/shared/AspectRatio'
import SectionTitle from 'src/brandkit/logo/SectionTitle'
import LogoExample, { Logos } from 'src/brandkit/logo/LogoExample'
import { GAP } from 'src/brandkit/constants'
import RingsLight from 'src/logos/RingsLight'
export default React.memo(function Logo() {
  return (
    <Page
      sections={[
        {
          id: hashNav.brandLogo.overview,
          children: <Overview />,
        },
        // {
        //   id: hashNav.brandLogo.glyph,
        //   children: (
        //     <View style={[styles.container, { minHeight: 400, backgroundColor: colors.primary }]}>
        //       <Text>glyph</Text>
        //     </View>
        //   ),
        // },
        {
          id: hashNav.brandLogo.clearspace,
          children: <Clearspace />,
        },
        // {
        //   id: hashNav.brandLogo.size,
        //   children: (
        //     <View style={[styles.container, { height: 500, backgroundColor: colors.deepBlue }]}>
        //       <Text>size</Text>
        //     </View>
        //   ),
        // },
        {
          id: hashNav.brandLogo.backgrounds,
          children: <Backgrounds />,
        },
      ]}
    />
  )
})

const Overview = withNamespaces(NameSpaces.brand)(function _Overview({ t }: I18nProps) {
  return (
    <View style={styles.container}>
      <View style={styles.gap}>
        <H1 style={standardStyles.elementalMarginBottom}>{t('logo.title')}</H1>
        <Text style={[fonts.p, standardStyles.elementalMarginBottom]}>
          {t('logo.overviewCopy')}
        </Text>
        <Button kind={BTN.PRIMARY} text={t('logo.overviewBtn')} />
        <View style={[standardStyles.centered, styles.fullScreenLogo]}>
          <LogoLightBg height={100} />
        </View>
        <Text style={fonts.h5}>{t('logo.logoTitle')}</Text>
        <Text style={fonts.p}>{t('logo.logoText')}</Text>
      </View>
      <View style={styles.tiling}>
        <LogoExample
          logoType={Logos.light}
          background={colors.faintGray}
          btnText={t('downloadAssetBtn')}
          caption={t('logo.fullColorOnLightCaption')}
        />
        <LogoExample
          logoType={Logos.dark}
          background={colors.dark}
          btnText={t('downloadAssetBtn')}
          caption={t('logo.fullColorOnDarkCaption')}
        />
        <LogoExample
          logoType={Logos.black}
          background={colors.faintGray}
          btnText={t('downloadAssetBtn')}
          caption={t('logo.monochromeCaption')}
        />
        <LogoExample
          logoType={Logos.white}
          background={colors.dark}
          btnText={t('downloadAssetBtn')}
          caption={t('logo.monochromeInverseCaption')}
        />
      </View>
      <View style={styles.gap}>
        <Text style={fonts.h5}>{t('logo.glyphTitle')}</Text>
        <Text style={fonts.p}>{t('logo.glyphText')}</Text>
        <Button kind={BTN.TERTIARY} text={t('downloadAssetBtn')} style={styles.button} />
        <View style={styles.tiling}>
          <View
            style={[standardStyles.centered, styles.pilar, { backgroundColor: colors.faintGray }]}
          >
            <RingsLight height={35} />
          </View>
          <View style={[standardStyles.centered, styles.pilar, { backgroundColor: colors.dark }]}>
            <RingsLight height={35} />
          </View>
          <View
            style={[standardStyles.centered, styles.pilar, { backgroundColor: colors.faintPurple }]}
          >
            <RingsLight height={35} color={colors.black} />
          </View>
          <View
            style={[standardStyles.centered, styles.pilar, { backgroundColor: colors.primary }]}
          >
            <RingsLight height={35} color={colors.white} />
          </View>
        </View>
      </View>
    </View>
  )
})

const Clearspace = withNamespaces(NameSpaces.brand)(function _ClearSpace({ t }) {
  return (
    <View style={styles.gap}>
      <SectionTitle>{t('logo.clearspaceTitle')}</SectionTitle>
      <Text style={fonts.p}>{t('logo.clearspaceText')}</Text>
      <View style={[standardStyles.centered, styles.clearspaceImageArea]}>
        <AspectRatio ratio={714 / 357} style={styles.clearspaceImage}>
          <Image
            resizeMethod="resize"
            resizeMode="contain"
            source={require('src/brandkit/images/ClearspaceImage.png')}
            style={standardStyles.image}
          />
        </AspectRatio>
      </View>
    </View>
  )
})

const Backgrounds = withNamespaces(NameSpaces.brand)(function _Backgrounds({ t }: I18nProps) {
  return (
    <View>
      <View style={styles.gap}>
        <SectionTitle>{t('backgrounds.title')}</SectionTitle>
        <Text style={fonts.p}>{}</Text>
      </View>
      <View style={styles.tiling}>
        <View>
          <LogoWithBackground backgroundColor={colors.white} type="light" />
        </View>
        <View style={styles.gap}>
          <LogoWithBackground backgroundColor={'#F8F9F9'} type="light" />
        </View>
        <View style={styles.gap}>
          <LogoWithBackground backgroundColor={'#FEF2D6'} type="light" />
        </View>
      </View>
      <Text style={[fonts.h5, styles.gap]}>{t('backgrounds.colorBackgroundsTitle')}</Text>
      <Text style={[fonts.p, styles.gap]}>{t('backgrounds.colorBackgroundsText')}</Text>
      <View style={styles.tiling}>
        <View style={styles.gap}>
          <LogoWithBackground backgroundColor={colors.faintPurple} type="black" />
        </View>
        <View style={styles.gap}>
          <LogoWithBackground backgroundColor={'#FEDEDA'} type="black" />
        </View>
        <View style={styles.gap}>
          <LogoWithBackground backgroundColor={'#DCF6FF'} type="black" />
        </View>
      </View>
      <Text style={styles.gap}>{t('backgrounds.darkLogoText')}</Text>
      <View style={styles.tiling}>
        <View style={styles.gap}>
          <LogoWithBackground backgroundColor={'#8857F6'} type="white" />
        </View>
        <View style={styles.gap}>
          <LogoWithBackground backgroundColor={'#F0544A'} type="white" />
        </View>
        <View style={styles.gap}>
          <LogoWithBackground backgroundColor={'#3DBFFF'} type="white" />
        </View>
      </View>
      <Text style={styles.gap}>{t('backgrounds.darkLogoText')}</Text>
      <Text style={styles.gap}>{t('backgrounds.badLogoBackgrounds')}</Text>
      <View style={styles.tiling}>
        <Judgement is={Value.Bad}>
          <LogoWithBackground image={require('src/brandkit/images/lilah.jpg')} type="dark" />
        </Judgement>
        <Judgement is={Value.Bad}>
          <LogoWithBackground backgroundColor={colors.faintPurple} type="light" />
        </Judgement>
        <Judgement is={Value.Bad}>
          <LogoWithBackground backgroundColor={'#3DBFFF'} type="dark" />
        </Judgement>
      </View>
      <View style={styles.tiling}>
        <Judgement is={Value.Good}>
          <LogoWithBackground
            backgroundColor={colors.dark}
            image={require('src/brandkit/images/lilahOverlay.jpg')}
            type="white"
          />
        </Judgement>
        <Judgement is={Value.Good}>
          <LogoWithBackground backgroundColor={colors.faintPurple} type="black" />
        </Judgement>
        <Judgement is={Value.Good}>
          <LogoWithBackground backgroundColor={'#3DBFFF'} type="white" />
        </Judgement>
      </View>
    </View>
  )
})

const styles = StyleSheet.create({
  container: {},
  button: {
    transform: [{ translateX: -20 }],
  },
  pilar: { minWidth: 175, flex: 1, height: 350 },
  gap: { marginHorizontal: GAP },
  tiling: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  clearspaceImage: {
    maxWidth: 600,
    width: '100%',
    marginVertical: 10,
  },
  clearspaceImageArea: {
    backgroundColor: '#f8f9f9',
    padding: 20,
  },
  fullScreenLogo: { width: '100%', marginVertical: 100 },
})