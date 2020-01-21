import * as React from 'react'
import { Text, View } from 'react-native'
import { H1, H4 } from 'src/fonts/Fonts'
import EmailForm, { After } from 'src/forms/EmailForm'
import { I18nProps, NameSpaces, withNamespaces } from 'src/i18n'
import { Cell, GridRow, Spans } from 'src/layout/GridRow'
import AspectRatio from 'src/shared/AspectRatio'
import { colors, textStyles } from 'src/styles'

export default withNamespaces(NameSpaces.community)(function ConnectCover({ t }: I18nProps) {
  return (
    <>
      <GridRow>
        <Cell span={Spans.full}>
          <View>
            <AspectRatio ratio={855 / 286}>
              <View style={{ backgroundColor: colors.faintGold, height: '100%' }} />
            </AspectRatio>
            <H1 style={textStyles.center}>
              <Text>Developers. </Text>
              <Text>Designers. </Text>
              <Text>Dreamers. </Text>
              <Text>Doers. </Text>
            </H1>
          </View>
        </Cell>
      </GridRow>
      <GridRow>
        <Cell span={Spans.full}>
          <H4 style={textStyles.center}>{t('cover.joinMovement')}</H4>
          <EmailForm
            submitText={t('signUp')}
            route={'/contacts'}
            whenComplete={<After t={t} />}
            isDarkMode={false}
          />
        </Cell>
      </GridRow>
    </>
  )
})
