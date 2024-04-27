import React from "react";
import styles from "./style.module.scss";
import { Button, Divider, Grid, Link, Stack, TextField } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import PaymentIcon from "@mui/icons-material/Payment";
import ReplayIcon from "@mui/icons-material/Replay";
import HelpIcon from "@mui/icons-material/Help";
import ChatIcon from "@mui/icons-material/Chat";
import TelegramIcon from "@mui/icons-material/Telegram";
import InstagramIcon from "@mui/icons-material/Instagram";
import SendIcon from "@mui/icons-material/Send";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import WifiCalling3Icon from "@mui/icons-material/WifiCalling3";

const Footer = () => {
  return (
    <>
      <Divider />
      <Box sx={{ flexGrow: 1, height: "100%", mt: 3, mb: 2 }}>
        <Grid container spacing={2}>
          <Grid container item xs={12} sm={6} md={3}>
            <Stack direction="row" spacing={2}>
              <LocalShippingIcon />
              <Stack direction="column" spacing={2}>
                <Typography variant="subtitle2" gutterBottom>
                  Delivery
                </Typography>
                <Typography variant="caption" gutterBottom>
                  Pickup from the Comfy store, delivery to the address or to the
                  Nova Poshta and Meest branches
                </Typography>
              </Stack>
            </Stack>
          </Grid>
          <Grid container item xs={12} sm={6} md={3}>
            <Stack direction="row" spacing={2}>
              <VerifiedUserIcon />
              <Stack direction="column" spacing={2}>
                <Typography variant="subtitle2" gutterBottom>
                  Warranty
                </Typography>
                <Typography variant="caption" gutterBottom>
                  Certified equipment with an official manufacturer's warranty
                </Typography>
              </Stack>
            </Stack>
          </Grid>
          <Grid container item xs={12} sm={6} md={3}>
            <Stack direction="row" spacing={2}>
              <PaymentIcon />
              <Stack direction="column" spacing={2}>
                <Typography variant="subtitle2" gutterBottom>
                  Payment
                </Typography>
                <Typography variant="caption" gutterBottom>
                  You can pay for your purchase in cash, by card, or by bank
                  transfer
                </Typography>
              </Stack>
            </Stack>
          </Grid>
          <Grid container item xs={12} sm={6} md={3}>
            <Stack direction="row" spacing={2}>
              <ReplayIcon />
              <Stack direction="column" spacing={2}>
                <Typography variant="subtitle2" gutterBottom>
                  Returns
                </Typography>
                <Typography variant="caption" gutterBottom>
                  The goods are returned within 14 days after the purchase, in
                  accordance with the current law
                </Typography>
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Box>
      <Divider />
      <Box sx={{ flexGrow: 1, mb: 2, mt: 2 }}>
        <Grid container spacing={2}>
          <Grid container item xs={12} sm={6} md={3}>
            <Stack direction="row" alignItems="center" spacing={2}>
              <img
                src="https://scdn.comfy.ua/89fc351a-22e7-41ee-8321-f8a9356ca351/https://skin.comfy.ua/media/blb/footer/qr-code.svg/f_auto"
                alt="qcode"
              />
              <Typography
                variant="subtitle2"
                className={styles.footer__link}
                gutterBottom
              >
                It's nothing like that. It's just that the most convenient and
                fastest COMFY app is waiting to be downloaded.
              </Typography>
            </Stack>
            <Stack direction="column" spacing={1}>
              <Typography variant="subtitle2">
                Sign up for discounts!
              </Typography>
              <Typography variant="caption" gutterBottom>
                Don't worry, we don't spam
              </Typography>
              <Box
                component="form"
                sx={{
                  "& .MuiTextField-root": { width: "30ch" },
                }}
                noValidate
                autoComplete="off"
              >
                <Stack direction="column" spacing={1}>
                  <TextField
                    id="subscription email"
                    label="email@email.com"
                    variant="outlined"
                    size="small"
                  />
                  <Button
                    variant="contained"
                    sx={{
                      background: "#43b02a",
                    }}
                    type="submit"
                    endIcon={<SendIcon />}
                  >
                    Send
                  </Button>
                </Stack>
              </Box>
            </Stack>
          </Grid>
          <Grid container item xs={12} sm={6} md={2}>
            <Stack direction="column" spacing={0.75}>
              <Typography variant="subtitle2" gutterBottom>
                Comfy
              </Typography>
              <Link href="#" className={styles.footer__link}>
                About company
              </Link>
              <Link href="#" className={styles.footer__link}>
                Shops
              </Link>
              <Link href="#" className={styles.footer__link}>
                Contacts
              </Link>
              <Link href="#" className={styles.footer__link}>
                Press Center
              </Link>
              <Link href="#" className={styles.footer__link}>
                Careers
              </Link>
              <Link href="#" className={styles.footer__link}>
                Safety and warnings
              </Link>
            </Stack>
          </Grid>
          <Grid container item xs={12} sm={6} md={2.5}>
            <Stack direction="column" spacing={2}>
              <Typography variant="subtitle2" gutterBottom>
                Services and facilities
              </Typography>
              <Link href="#" className={styles.footer__link}>
                Bonus program
              </Link>
              <Link href="#" className={styles.footer__link}>
                Gift cards
              </Link>
              <Link href="#" className={styles.footer__link}>
                COMFY books
              </Link>
              <Link href="#" className={styles.footer__link}>
                Loan and payment by installments
              </Link>
              <Link href="#" className={styles.footer__link}>
                Trade In
              </Link>
              <Link href="#" className={styles.footer__link}>
                Service agreements
              </Link>
              <Link href="#" className={styles.footer__link}>
                Cashless payment
              </Link>
              <Link href="#" className={styles.footer__link}>
                Payment
              </Link>
            </Stack>
          </Grid>
          <Grid container item xs={12} sm={6} md={2.5}>
            <Stack direction="column" spacing={2}>
              <Typography variant="subtitle2" gutterBottom>
                Help to the buyer
              </Typography>
              <Link href="#" className={styles.footer__link}>
                Customer assistance center
              </Link>
              <Link href="#" className={styles.footer__link}>
                Personal assistant
              </Link>
              <Link href="#" className={styles.footer__link}>
                Find an order
              </Link>
              <Link href="#" className={styles.footer__link}>
                Terms of delivery
              </Link>
              <Link href="#" className={styles.footer__link}>
                Exchange and return of goods
              </Link>
              <Link href="#" className={styles.footer__link}>
                Warranty
              </Link>
              <Link href="#" className={styles.footer__link}>
                The status of the goods in repair
              </Link>
              <Link href="#" className={styles.footer__link}>
                Terms of use of the site
              </Link>
              <Link href="#" className={styles.footer__link}>
                Promotion rules
              </Link>
            </Stack>
          </Grid>
          <Grid container item xs={12} sm={6} md={2}>
            <Stack direction="column" spacing={2}>
              <Typography variant="subtitle2" gutterBottom>
                Consultation
              </Typography>
              <Link href="tel:0800303505" className={styles.footer__phone}>
                0-800-303-505
              </Link>
              <Link href="tel:0800600506" className={styles.footer__phone}>
                0-800-600-506
              </Link>
              <Typography
                variant="caption"
                className={styles.footer__link}
                gutterBottom
              >
                Free of charge in Ukraine
                <br />
                08:00-21:00 Mon-Sun
              </Typography>
              <Stack direction="row" alignItems="center" spacing={2}>
                <HelpIcon />
                <Typography
                  variant="caption"
                  className={styles.footer__link}
                  gutterBottom
                >
                  Help Center
                </Typography>
              </Stack>
              <Stack direction="row" alignItems="center" spacing={2}>
                <ChatIcon />
                <Typography
                  variant="caption"
                  className={styles.footer__link}
                  gutterBottom
                >
                  Chat
                </Typography>
              </Stack>
              <Stack direction="row" alignItems="center" spacing={2}>
                <TelegramIcon />
                <Typography
                  variant="caption"
                  className={styles.footer__link}
                  gutterBottom
                >
                  Telegram
                </Typography>
              </Stack>
              <Stack direction="row" alignItems="center" spacing={2}>
                <InstagramIcon />
                <Typography
                  variant="caption"
                  className={styles.footer__link}
                  gutterBottom
                >
                  Instagram
                </Typography>
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Box>
      <Divider />
      <Box
        sx={{
          flexGrow: 1,
          mb: 2,
          mt: 2,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Grid container>
          <Grid container item sm={12} md={10}>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              useFlexGap
              flexWrap="wrap"
              alignItems="center"
              spacing={2}
            >
              <Typography variant="subtitle2" gutterBottom>
                © All rights reserved by COMFY TRADE LLC
              </Typography>
              <img
                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjYiIGhlaWdodD0iMzgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgOS42OGg1LjI1NGwuNjQxIDguMThDOS4zNTUgMTEuNyAxMi45MTIgNS44IDE2LjQ2OCAwaDEuNzNjLTMuNzggNy4zOTgtNy41MjkgMTQuODYxLTExLjE1IDIyLjQ1NUgzLjIwNWwtLjkzLTguOTk1Yy0uMjIzLTIuMjUtLjY3Mi0zLjE5NC0yLjI3NS0zLjQyMnYtLjM1OXptMTkuNTc2IDEuNTMxaC02LjI0OGwtMS43NjIgMTEuMjQ0aDYuMjhsLjM1Mi0yLjQ0NWgtMy4zOTZsLjMyLTEuOTg4aDMuMjM2bC4zODUtMi40NDRoLTMuMjM2bC4yODgtMS45MjNoMy4zOTZsLjM4NS0yLjQ0NHoiIGZpbGw9IiMzQTU3QTciLz48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTIxLjI3NCAxMS4yMTFoNC4zNTdjMi43ODggMCAzLjQ5MiAxLjYzIDMuMjA0IDMuNTUyLS4yNTYgMS42My0xLjQxIDIuNzA1LTIuODgzIDMuMDk2bDIuNzU1IDQuNTk2aC0zLjU4OGwtMi4wODMtNC40MzMtLjcwNSA0LjQzM0gxOS40OGwxLjc5NC0xMS4yNDR6bTIuNSAyLjI0OWwtLjQ1IDIuODM1aC44MzNjLjgwMSAwIDEuNTctLjYyIDEuNjk5LTEuNDAxLjEyOC0uNzgzLS40MTctMS40MDItMS4yMTgtMS40MDJoLS44NjV2LS4wMzJ6IiBmaWxsPSIjM0E1N0E3Ii8+PHBhdGggZD0iTTMzLjk5MyAxMS4yMTFoLTIuODVsLTEuNzMxIDExLjI0NGgyLjg1MmwxLjczLTExLjI0NHpNNTYuMTMyIDI3LjQ0Yy4xMjgtLjY4NC4yNTctMS40LjM1My0yLjE1LTIuMzQtLjc4Mi01LjE1OC0uMjkzLTYuMjQ4IDEuMDc1YTIuOTU4IDIuOTU4IDAgMDAtLjYwOCAxLjg5Yy4wMzIgMS4wNzYuOTI4IDEuODI2IDEuNjk4IDIuMjUuMTU2LjA5LjM0OC4xODMuNTUuMjgyLjY2NS4zMjIgMS40NDQuNyAxLjQ2OCAxLjI0OSAwIC42Mi0uNjczLjk0NS0xLjI1IDEuMDEtMS4yMzguMTYyLTIuMzUtLjMxNy0zLjE4MS0uNjc1bC0uMDIzLS4wMWMtLjA5Ni43NS0uMjI0IDEuNS0uMzUyIDIuMjE3IDIuMTE1Ljg4IDUuMjU1Ljc1IDYuNjY0LS42MmEzLjE4NSAzLjE4NSAwIDAwLjkzLTIuNDFjLS4wOTctMS4zMzctMS4xODYtMS45ODktMi4xOC0yLjQ3OC0uMDktLjA0OS0uMTkzLS4xLS4zMDEtLjE1MmwtLjAxLS4wMDVjLS41NDQtLjI2Ny0xLjIyNi0uNi0xLjIyNi0xLjExNCAwLS41NTQuNzM3LS44MTQgMS4zNDUtLjg0Ny44MTMtLjA1MiAxLjQyNC4xNjMgMS45NjIuMzUxLjE0LjA1LjI3Ni4wOTcuNDEuMTM4em0tOS4xMzEtMTYuMjI5SDQ0LjE1bC0xLjczIDExLjI0NGgyLjg1MWwxLjczLTExLjI0NHptMi4xNzkgMGg2LjI0OGwtLjM4NSAyLjQ0NGgtMy4zOTZsLS4yODggMS45MjNoMy4yMzZsLS4zODUgMi40NDRoLTMuMjM2bC0uMzIgMS45ODhoMy4zOTZsLS4zODUgMi40NDVoLTYuMjQ3TDQ5LjE4IDExLjIxem0tMTMuMDA4IDBoNi4zMTJsLS4zODUgMi40NDRoLTMuNDZsLS4zMiAxLjkyM2gzLjE3MWwtLjM4NCAyLjQ0NGgtMy4xNzJsLS42NzMgNC40MzNIMzQuNDFsMS43NjItMTEuMjQ0eiIgZmlsbD0iIzNBNTdBNyIvPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNjAuODQyIDExLjIxMWgtMy43MTZsLTEuNzMgMTEuMjQ0aDMuNzE2YzMuNTU2IDAgNi4zNDQtMi40NDUgNi44MjQtNS42MDYuMzUyLTIuMjQ5LS42NzMtNS42MzgtNS4wOTQtNS42Mzh6bS0uNjczIDIuNDQ0aC0uNTc3bC0xLjAyNSA2LjM1NWguNzY5YzEuODkgMCAzLjMtMS4yNyAzLjYyLTMuMjkxLjI1Ny0xLjUtLjYwOC0zLjA2NC0yLjc4Ny0zLjA2NHpNMjIuMyAyNS4wOTRoLTEuODZsLTEuMzc4IDkuODQzaDEuODU5bC4wOTYtLjcxN2MuMzUyLjU4Ni44NjUuOTEyIDEuNjAyLjkxMiAxLjQ3NCAwIDIuODgzLTEuNDM0IDMuMTQtMy4yMjYuMjU2LTEuNzYtLjcwNS0zLjIyNy0yLjE4LTMuMjI3LS43MDQgMC0xLjM3Ny4zMjYtMS44OS44NDhsLjYxLTQuNDMzem0xLjQ3MyA2Ljg0NGMuMTI4LS44MTQtLjM1Mi0xLjQzNC0xLjAyNS0xLjQzNC0uNjczIDAtMS4zMTQuNjUyLTEuNDQyIDEuNDM0LS4xMjguNzgyLjM1MiAxLjQwMiAxLjAyNSAxLjQwMi43MDUgMCAxLjM0Ni0uNjIgMS40NDItMS40MDJ6IiBmaWxsPSIjM0E1N0E3Ii8+PHBhdGggZD0iTTI1Ljg4OCAyOC44NDJoMi4yNDJsLjk2MiAzLjE2MSAxLjkyMi0zLjE2aDIuMTQ2TDI3LjU1NCAzOGgtMi4xNDdsMi4zNzEtMy44NDYtMS44OS01LjMxMnptMTkuODk2LTMuNzQ4TDQ0LjE1IDM0Ljk3aDIuNjU5bDEuNjM0LTkuODc1aC0yLjY2ek00MC42NjkgMjguM2wtLjAxLjAyM2MtLjQzNSAxLjE2LS44NyAyLjMxNS0xLjM0NyAzLjQybC0uMjg4LTEuMzA0LjAzMi4yMjhjLS4xOTMtLjY4NC0uNTQ1LTEuMzM2LS45OTQtMS45MjNsLS4wMzItLjAzMmEyLjA0IDIuMDQgMCAwMC0uMjU2LS4yOTNjLS4wNjQtLjA2Ni0uMDk2LS4xMy0uMTYtLjE5NmE5LjQwMiA5LjQwMiAwIDAwLTIuMjQzLTEuODI1bDIuMzcxIDguNTM5aDIuODUxYy42NzMtMS42NjMgMS4zNy0zLjMgMi4wNjctNC45MzhhMzAxLjI5IDMwMS4yOSAwIDAwMi4wNjYtNC45MzdINDEuOTRhODIuNjk2IDgyLjY5NiAwIDAwLTEuMjcgMy4yMzd6IiBmaWxsPSIjM0E1N0E3Ii8+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik02Mi45ODkgMzUuMDAyaDIuNDM0bC0yLjA4Mi05Ljk0aC0yLjAxOWMtLjI4OCAwLS45OTMuMDMyLTEuMTg1LjM1OC0uMTI4LjIyOC0uNDE2Ljc1LS41NzcgMS4xMDhsLTMuNjIgOC40NzRoMi43ODdsLjYwOS0xLjUzMmgzLjNjLjE2LjQ4OS4xOTIgMS4wNzUuMzUyIDEuNTMyem0tMi45NDgtMy41MmwxLjM0Ni0zLjY4My44MzIgMy42ODNoLTIuMTc4eiIgZmlsbD0iIzNBNTdBNyIvPjxwYXRoIGQ9Ik02LjQ3MiA2Ljk3NEwxLjk1NSA1LjAydi0uMzI2aDkuMzIzdi4zMjZsLTQuMSA3LjA0aC0uMzIxbC0uMzg1LTUuMDg1em0yNi4xNDQgMTguMDg4aDQuMzI1Yy42MSAwIDEuMDkuMjkzIDEuMjE4IDEuMDFsLjkzIDQuNTk1Yy0uODM0LTIuNzM3LTMuOTc0LTQuODg4LTYuNDczLTUuMzc3di0uMjI4eiIgZmlsbD0iI0Y4OTgxRCIvPjwvc3ZnPg=="
                className={styles.footer__pay}
                alt="Visa"
              />
              <img
                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iMjgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTUzLjg5OS41N2wtLjM5NSAyLjY3OGMtLjg3OC0uNDgzLTEuNTM3LS42NTktMi4yNC0uNjU5LTEuODQ0IDAtMy4xNjIgMS44ODctMy4xNjIgNC41NjQgMCAxLjg0NC44NzkgMi45ODUgMi4zMjggMi45ODUuNjE1IDAgMS4yNzMtLjIyIDIuMTA4LS42MTVsLS40NCAyLjgwOWMtLjkyMi4yNjMtMS40OTIuMzUxLTIuMTk1LjM1MS0yLjY3OSAwLTQuMzQ4LTIuMDE5LTQuMzQ4LTUuMjY2QzQ1LjU1NSAzLjAyOCA0Ny44NCAwIDUxLjE3NiAwYy40NCAwIC43OS4wNDQgMS4xNDIuMTMybDEuMDU0LjI2M2MuMTEuMDQ0LjE4Ny4wNjYuMjYzLjA4OGwuMDM4LjAxLjA0NC4wMTMuMDM2LjAxMkEyLjA4NCAyLjA4NCAwIDAxNTMuOS41N3oiIGZpbGw9IiNGRDBDMTUiLz48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTc2LjQyNyAxMS42NzRoLS4yNjR2LTEuNDA1aC41N2MuMTMzIDAgLjI2NCAwIC4zNTIuMDg4YS40LjQgMCAwMS4xNzYuMzUxYzAgLjE3Ni0uMDg4LjMwNy0uMjIuMzUxbC4yNjQuNjE1aC0uNDRsLS4yMTktLjUyN2gtLjIydi41Mjd6bS4wNDMtLjc5aC4xNzZjLjA4OCAwIC4xMzIgMCAuMTc2LS4wNDQuMDQ0IDAgLjA0NC0uMDQ0LjA0NC0uMTMyIDAtLjA0NC0uMDQ0LS4xMzItLjA4OC0uMTMyLS4wNDQtLjA0My0uMTMyLS4wNDMtLjE3Ni0uMDQzaC0uMTc1bC4wNDMuMzV6IiBmaWxsPSIjRkQwQzE1Ii8+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik03NS4xOTcgMTAuOTcyYzAtLjgzNC42NTktMS41MzcgMS40OTMtMS41MzcuODM0IDAgMS40OTMuNzAzIDEuNDkzIDEuNTM3IDAgLjgzMy0uNjU5IDEuNTM2LTEuNDkzIDEuNTM2LS44MzQuMDQzLTEuNDkzLS42NTktMS40OTMtMS41MzZ6bTEuNDQ5IDEuMjI4Yy42MTUgMCAxLjE0Mi0uNTI2IDEuMTQyLTEuMTg1IDAtLjY1OC0uNTI3LTEuMTg1LTEuMTQyLTEuMTg1LS42MTUgMC0xLjE0Mi41MjctMS4xNDIgMS4xODUgMCAuNjU5LjUyNyAxLjE4NSAxLjE0MiAxLjE4NXoiIGZpbGw9IiNGRDBDMTUiLz48cGF0aCBkPSJNNDUuNTEzIDIuMzgzYS4zNzYuMzc2IDAgMDEuMDg2LjAzaC4xMzJjLS40NC44MzUtLjc0NyAxLjcxMi0uOTY2IDIuODk3aC0uMTc2Yy0xLjE4NSAwLTEuNDA1IDEuMDEtMi4zMjcgNy4xMWgtMi41MDNsMS41MzctOS45MThoMi4xOTVsLS4yMiAxLjQ5MmMuNzkxLTEuMTg1IDEuMjc0LTEuNjI0IDIuMDY1LTEuNjI0LjA1OSAwIC4xMTggMCAuMTc3LjAxM3ptLTE0LjggOS45MDVjLS42Ni4yMi0xLjIzLjM1MS0xLjguMzUxLTEuMjc0IDAtMS45NzctLjc0Ni0xLjk3Ny0yLjE5NCAwLS4yMy4wMzQtLjQ5My4wNzEtLjc5bC4wMTctLjEzMi4xNzUtLjk2NS4xMzItLjc5IDEuMDk4LTYuNzU5aDIuNDZsLS4zMDggMS40NDloMS4yNzNsLS4zNTEgMi40MTNIMzAuMjNsLS42NiA0LjEyNmMtLjA0My4xNzUtLjA0My4zMDctLjA0My4zOTUgMCAuNTI2LjI2My43NDYuODM0Ljc0Ni4zMDggMCAuNDgzLS4wNDQuNjU5LS4wODhsLS4zMDcgMi4yMzh6bS03LjkwNS0zLjkwNmMtMS4zMTctLjY1OC0xLjg4OC0xLjQ5Mi0xLjg4OC0yLjc2NS0uMDQ0LTEuODQzLjkyMi0zLjMzNSAzLjc3Ni0zLjI5MS41NzEgMCAxLjUzNy4wODggMi4xOTYuMjJsLS4zNTEgMi4yODFoLS4wMDNjLS42NTgtLjA4OC0xLjMxNS0uMTc1LTEuNzk4LS4xNzUtLjgzNCAwLTEuMjMuMjYzLTEuMjMuNzkgMCAuNDgzLjA4OS42MTQgMS4xNDMgMS4wOTcgMS4yNzMuNjE0IDEuNzU2IDEuNDA0IDEuNzU2IDIuNzY1IDAgMi4yMzgtMS4xODUgMy4yOTEtMy44MiAzLjI5MS0uMzA4IDAtLjc5LS4wNDQtMS4zNjItLjA4OC0uMzA3IDAtLjQ4My0uMDQzLS42NTgtLjA4N2wtLjQ0LS4wODgtLjEzMS0uMDQ0LjM1MS0yLjI4MmMuODM0LjI2MyAxLjQ5My4zOTUgMi4yNC4zOTUuOTY2IDAgMS40MDUtLjMwNyAxLjQwNS0uOTIyIDAtLjQzOC0uMTc2LS42MTQtMS4xODYtMS4wOTd6IiBmaWxsPSIjRkQwQzE1Ii8+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik03My43NDggMTIuNDJoLTIuMzcybC4xMzItLjk2NmMtLjY1OC43NDYtMS40MDUgMS4wOTctMi4yODMgMS4wOTctMS44NDUgMC0zLjAzLTEuNjIzLTMuMDMtNC4xMjUgMC0zLjI5MSAxLjg0NC02LjEgNC4wNC02LjEuOTY2IDAgMS42NjguNDM5IDIuMzcxIDEuMzZsLjUyNy0zLjUxaDIuNDZMNzMuNzQ3IDEyLjQyem0tMy42ODktMi4zMjZjMS4xODYgMCAxLjk3Ni0xLjM2IDEuOTc2LTMuMzggMC0xLjI3Mi0uNDgzLTEuOTc0LTEuMzE3LTEuOTc0LTEuMTQyIDAtMS45MzIgMS40MDQtMS45MzIgMy4zMzUgMCAxLjMxNy40MzkgMi4wMTkgMS4yNzMgMi4wMTl6bS0zNC4wMzMgMi41MDFjLjkyMiAwIDEuNzEzLS4xMzEgMi41OTEtLjM5NWwuMzUxLTIuNDU3Yy0uOTIyLjM5NS0xLjcxMi42MTQtMi41OS42MTQtMS40NSAwLTIuMTk2LS41Ny0yLjE5Ni0xLjc1NSAwLS4wODggMC0uMTMyLjA0NC0uMzA4aDQuOTYyYy4yMi0xLjAwOS4zMDctMS43NTUuMzA3LTIuNDU3IDAtMi4yMzgtMS4yNzMtMy42NDMtMy4zMzctMy42NDMtMi41MDMgMC00LjM0OCAyLjUwMi00LjM0OCA1LjkyNSAwIDIuOTQgMS40NSA0LjQ3NiA0LjIxNiA0LjQ3NnptMS4yMy02LjgwMmMwIC4wODggMCAuMzA3LS4wNDQuNDgzdi4wNDRoLTIuNzIzYy4yMi0xLjE4NS43OS0xLjggMS41ODEtMS44Ljc0NiAwIDEuMTg2LjQ4MyAxLjE4NiAxLjI3M3oiIGZpbGw9IiNGRDBDMTUiLz48cGF0aCBkPSJNMTAuOTA4IDEyLjQyaC0yLjQ2bDEuNDA2LTkuMzkyLTMuMjA2IDkuMzkySDQuOThsLS4yMi05LjM0OC0xLjQ5MiA5LjM0OEguOTM5TDIuODcyLjIyaDMuNTU3bC4xMzEgNy41NDhMOC45NzYuMjE5aDMuODY0bC0xLjkzMiAxMi4yeiIgZmlsbD0iI0ZEMEMxNSIvPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTcuMDU2IDEyLjQyaDIuMDY0bC4wNDMtLjI2NC4wNDQtLjM1LjA0NC0uNTI3LjA4OC0uNjE1LjUyNy0zLjUxYy4xNzYtMS4xNDIuMjItMS40OTMuMjItMS45NzUgMC0xLjg4OC0xLjA5OC0yLjg5Ny0zLjI1LTIuODk3LS45MjIgMC0xLjc1Ni4xMzItMi45ODYuNTI3bC0uMzUxIDIuMjM4LjIyLS4wODguMzA3LS4xMzJhNy41NDQgNy41NDQgMCAwMTIuMDY0LS4zMDdjMS4xNDEgMCAxLjU4LjI2NCAxLjU4LjkyMiAwIC4xNzUgMCAuMzA3LS4wODcuNjU4YTguNTggOC41OCAwIDAwLTEuMDEtLjA4OGMtMi43NjcgMC00LjM5MiAxLjQwNS00LjM5MiAzLjgxOCAwIDEuNjI0LjkyMyAyLjcyMSAyLjI4NCAyLjcyMSAxLjE4NSAwIDIuMDItLjM1IDIuNjM1LTEuMTg1bC0uMDQ0IDEuMDU0em0tLjMwOC00LjQ3N2MuMTc2IDAgLjMwOCAwIC41NzEuMDQ0LS4wNDQgMS40NDgtLjc5IDIuNTAyLTEuNzU2IDIuNDU4LS41NzEgMC0uOTIzLS4zOTUtLjkyMy0xLjAxIDAtLjk2NS43MDMtMS40OTIgMi4xMDgtMS40OTJ6bTQzLjI1NSA0LjQ3N2gtMi4wNjRsLjA0NC0xLjA1M2MtLjYxNS44MzMtMS40NSAxLjE4NC0yLjYzNSAxLjE4NC0xLjM2MSAwLTIuMjg0LTEuMDk3LTIuMjg0LTIuNzIgMC0yLjQxNCAxLjYyNS0zLjgxOSA0LjM5Mi0zLjgxOS4yNjMgMCAuNjU4LjA0NCAxLjAxLjA4OC4wODgtLjM1LjA4OC0uNDgzLjA4OC0uNjU4IDAtLjY1OC0uNDQtLjkyMi0xLjU4MS0uOTIyLS43MDMgMC0xLjQ5My4xMzItMi4wNjQuMzA3bC0uMzUyLjA4OC0uMjIuMDg4LjM1Mi0yLjIzOGMxLjIzLS4zOTUgMi4wNjQtLjUyNyAyLjk4Ni0uNTI3IDIuMTUyIDAgMy4yNSAxLjAxIDMuMjUgMi44OTcgMCAuNDgyLS4wNDQuODMzLS4yMiAxLjk3NWwtLjUyNyAzLjUxLS4wODcuNjE1LS4wODguNDgyLS4wNDQuMzUyLjA0NC4zNXptLTEuOC00LjQzM2MtLjI2NC0uMDQ0LS4zOTYtLjA0NC0uNTcyLS4wNDQtMS40MDUgMC0yLjE1MS41MjctMi4xNTEgMS40OTIgMCAuNjE1LjM1MSAxLjA1NC45MjIgMS4wNTQgMS4wMSAwIDEuNzU2LTEuMDU0IDEuOC0yLjUwMnoiIGZpbGw9IiNGRDBDMTUiLz48cGF0aCBkPSJNNjYuODY2IDIuMzg2Yy4wMjUuMDA2LjA1LjAxNS4wNzUuMDI4aC4xMzJjLS40NC44MzQtLjc0NyAxLjcxMS0uOTY2IDIuODk2aC0uMTc2Yy0xLjE4NSAwLTEuNDA1IDEuMDEtMi4zMjcgNy4xMUg2MS4xbDEuNDkzLTkuOTE4aDIuMjRsLS4yMiAxLjQ5MmMuNzktMS4xODUgMS4yNzMtMS42MjQgMi4wNjQtMS42MjQuMDYzIDAgLjEyNiAwIC4xODguMDE2eiIgZmlsbD0iI0ZEMEMxNSIvPjxwYXRoIGQ9Ik01Ljc3IDE3LjU1NGMuODM0IDAgMS40OTMuMjY0IDEuOTMyLjU3bC43MDItMi41Yy0uNjE0LS4zOTYtMS42MjQtLjU3MS0yLjcyMi0uNTcxLTEuOTMyIDAtMy45NTIuOTY1LTMuOTUyIDQuMTY5IDAgMS45OTcgMS4xMDcgMi42MTYgMi4wNjMgMy4xNTEuNzI1LjQwNSAxLjM2Mi43NjIgMS4zNjIgMS42MzMgMCAxLjI3Mi0xLjE0MiAxLjQ5Mi0xLjg4OCAxLjQ5Mi0uNzkgMC0xLjcxMy0uMjY0LTIuMTk2LS43MDNMLjUgMjcuMjk3Yy43NDcuMzUxIDEuOC42NTggMi43MjMuNjU4IDIuMDY0IDAgNC4zMDMtLjkyMSA0LjMwMy00LjM0NSAwLTIuMjQzLTEuMjEtMi45Mi0yLjE5Mi0zLjQ3LS42Ny0uMzc0LTEuMjMzLS42OS0xLjIzMy0xLjQgMC0uOTY2LjcwMi0xLjE4NiAxLjY2OS0xLjE4NnptNDUuNjI1IDEuMDFsLjM5Ni0yLjY3N2ExMC4zMiAxMC4zMiAwIDAxLS4yNjMtLjExIDEwLjY1MiAxMC42NTIgMCAwMC0uMjY0LS4xMWwtLjk2Ni0uMjYzYTMuODQ0IDMuODQ0IDAgMDAtMS4wNTQtLjEzMmMtMy4xMTggMC01LjI3IDMuMDI4LTUuMjcgNy40MTcgMCAzLjI0NyAxLjU4MSA1LjI2NiA0LjA4NCA1LjI2Ni42NTkgMCAxLjIzLS4wODggMi4wNjQtLjM1bC4zOTUtMi43NjZjLS43NDYuMzk1LTEuNDA1LjYxNS0xLjk3Ni42MTUtMS4zNjEgMC0yLjE1Mi0xLjE0MS0yLjE1Mi0yLjk4NSAwLTIuNjc3IDEuMjMtNC41NjQgMi45NDMtNC41NjQuNjU4IDAgMS4yMy4xNzYgMi4wNjMuNjU5eiIgZmlsbD0iI0YzQUUxMiIvPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNTUuMzkyIDE3LjU5OGMyLjMyNyAwIDMuNTU3IDEuOTc1IDMuNTU3IDQuNDc2IDAgNC4xNy0xLjg0NSA1Ljk2OS00LjQzNiA1LjkyNS0yLjUwMyAwLTMuNTU3LTIuMDYzLTMuNTU3LTQuNTY0IDAtMy40NjcgMS43NTctNS44MzcgNC40MzYtNS44Mzd6bS0uNzAzIDguMDc1YzEuMDk4IDAgMS44LTEuMzYgMS44LTMuNTk5IDAtMS4wNTMtLjMwNy0yLjAxOC0xLjIzLTEuOTc0LTEuMTQgMC0xLjg0MyAxLjc5OS0xLjg0MyAzLjM3OSAwIDEuMzE2LjQ4MyAyLjIzOCAxLjI3MyAyLjE5NHoiIGZpbGw9IiNGM0FFMTIiLz48cGF0aCBkPSJNMzYuMzc3IDE3LjY4NmMtLjA4OC0uMDQ0LS4xNzYtLjA0NC0uMjYzLS4wNDQtLjc0NyAwLTEuMTg2LjQzOS0xLjkzMyAxLjYyNGwuMjItMS40OTJoLTIuMTA4bC0xLjQwNSA5LjkxOGgyLjMyN2MuODc4LTYuMDU2IDEuMDk4LTcuMTEgMi4xOTYtNy4xMS4wODggMCAuMDg4IDAgLjE3Ni4wNDQuMjItMS4xODUuNDgzLTIuMDYyLjg3OC0yLjg5NmwtLjA4OC0uMDQ0eiIgZmlsbD0iI0YzQUUxMiIvPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNjQuNTcgMjcuNjA0aDIuMTk1bDEuNzU3LTEyLjI0NGgtMi4yNGwtLjUyNyAzLjUxYy0uNjU5LS45Mi0xLjMxNy0xLjM2LTIuMjQtMS4zNi0yLjAyIDAtMy43NzYgMi44MDktMy43NzYgNi4xIDAgMi41MDIgMS4xNDIgNC4xMjYgMi44MSA0LjEyNi44MzUgMCAxLjUzNy0uMzUxIDIuMTUyLTEuMDk3bC0uMTMxLjk2NXptLjU3LTUuNjYxYzAgMS45NzUtLjc0NiAzLjMzNS0xLjg0NCAzLjMzNS0uNzkgMC0xLjE4Ni0uNjU4LTEuMTg2LTEuOTMgMC0xLjk3Ni43NDctMy4zMzYgMS44LTMuMzM2Ljc5MSAwIDEuMjMuNjU4IDEuMjMgMS45M3pNMTQuNTk2IDI3LjU2YTcuMjY2IDcuMjY2IDAgMDEtMi4zNzEuMzk1Yy0yLjU5MSAwLTMuOTUyLTEuNTM2LTMuOTUyLTQuNDc2IDAtMy4zOCAxLjcxMi01LjkyNSA0LjA0LTUuOTI1IDEuOTMyIDAgMy4xMTcgMS40MDUgMy4xMTcgMy42NDMgMCAuNzAyLS4wODcgMS40NDgtLjMwNyAyLjQ1N2gtNC42MWMtLjAxOC4wNy0uMDI5LjEyLS4wMzUuMTU5YS42NzcuNjc3IDAgMDAtLjAxLjA5di4wNTljMCAxLjE0LjcwMyAxLjcxMSAyLjA2NCAxLjcxMS44MzUgMCAxLjU4MS0uMjIgMi40MTUtLjYxNGwtLjM1MSAyLjUwMXptLTEuMzE3LTUuODhjMC0uMTM1LjAxNi0uMjUzLjAyOS0uMzQ0di0uMDAyYTMuODcxIDMuODcxIDAgMDAuMDE1LS4xMzdjMC0uNzktLjM5Ni0xLjI3My0xLjA5OC0xLjI3My0uNzQ3IDAtMS4yNzQuNjE0LTEuNDkzIDEuOGgyLjU0N3YtLjA0NHptMjYuNjExIDYuMjc1Yy44MzQgMCAxLjU4MS0uMTMxIDIuMzcxLS4zOTVsLjM1Mi0yLjUwMWMtLjgzNS4zOTUtMS41ODEuNjE0LTIuNDE2LjYxNC0xLjM2IDAtMi4wNjMtLjU3LTIuMDYzLTEuNzExIDAtLjA1NyAwLS4wOTUuMDExLS4xNjEuMDA3LS4wMzguMDE3LS4wODQuMDMyLS4xNDdoNC42NTVjLjIyLTEuMDA5LjMwOC0xLjc1NS4zMDgtMi40NTcgMC0yLjIzOC0xLjIzLTMuNjQzLTMuMTYyLTMuNjQzLTIuMzI4IDAtNC4wNCAyLjU0Ni00LjA0IDUuOTI1IDAgMi45NCAxLjMxNyA0LjQ3NiAzLjk1MiA0LjQ3NnptMS4wOTgtNi43NThjMCAuMDg4IDAgLjI2My0uMDQ0LjQ4M3YuMDQzaC0yLjU0N2MuMjItMS4xODQuNzQ3LTEuNzk5IDEuNDkzLTEuNzk5LjcwMyAwIDEuMDk4LjQ4MyAxLjA5OCAxLjI3M3pNNzQuNjcgMjcuNTZhNy40NDQgNy40NDQgMCAwMS0yLjM3Mi4zOTVjLTIuNTkgMC0zLjk1Mi0xLjUzNi0zLjk1Mi00LjQ3NiAwLTMuMzggMS43NTctNS45MjUgNC4wODQtNS45MjUgMS45MzIgMCAzLjExOCAxLjQwNSAzLjExOCAzLjY0MyAwIC43MDItLjA4OCAxLjQ0OC0uMzA4IDIuNDU3aC00LjYxYy0uMDQ0LjE3Ni0uMDQ0LjIyLS4wNDQuMzA4IDAgMS4xNC43MDIgMS43MTEgMi4wNjQgMS43MTEuODM0IDAgMS41OC0uMjIgMi40MTUtLjYxNGwtLjM5NSAyLjUwMXptLTEuMzE4LTUuODhjMC0uMTM1LjAxNy0uMjUzLjAzLS4zNDRsLjAwNi0uMDQ1LjAwMy0uMDNhLjU1Ni41NTYgMCAwMC4wMDUtLjA2NGMwLS43OS0uMzk1LTEuMjczLTEuMDk4LTEuMjczLS43NDYgMC0xLjI3My42MTQtMS40OTMgMS44aDIuNTQ3di0uMDQ0eiIgZmlsbD0iI0YzQUUxMiIvPjxwYXRoIGQ9Ik0yMS40MDMgMjcuNTZjLS40ODMuMjItMS4xNDIuMzk1LTIuMDY0LjM5NS0yLjAyIDAtMy4yOTQtMi4wMTktMy4yOTQtNC41MiAwLTMuMjQ4IDEuODQ1LTUuNzkzIDQuNTIzLTUuNzkzLjU3MSAwIDEuNDkzLjI2MyAyLjE5Ni42NThsLS41MjcgMi4zN2MtLjQ4My0uMzUxLTEuMDEtLjUyNy0xLjUzNy0uNTI3LTEuMjMgMC0yLjE1MiAxLjE0Mi0yLjE1MiAzLjE2IDAgMS4xODUuNjU5IDIuMTUgMS42NjkgMi4xNS42MTUgMCAxLjA1NC0uMTMxIDEuNTM3LS40MzhsLS4zNTEgMi41NDV6bTguMzg3LjA0NGE0NC43NyA0NC43NyAwIDAxLjMwOC0yLjU0NWwxLjA5Ny03LjI4NUgyOC43OGwtLjcwMyA0LjU2NGMtLjE3NSAxLjQ5Mi0uNzkgMi43Mi0xLjggMi43Mi0uNzAzLjA0NS0uOTY2LS41Ny0uOTY2LTEuMTQgMC0uNDgzLjA4OC0xLjAxLjE3Ni0xLjQ5MmwuNjE0LTQuNjA4aC0yLjUwM2wtLjYxNCA0LjYwN2MtLjEzMiAxLjAxLS4xNzYgMS40MDUtLjE3NiAyLjA2MyAwIDEuODg3Ljc0NiAzLjM4IDIuMTUyIDMuMzggMS4zMTcgMCAyLjAyLS43NDcgMi43MjItMS44NDRoLjA0NGwtLjE3NSAxLjU4aDIuMjR6bTQ3LjIwNy0uMDg4aC0uMzk1di0xLjYyM2gtLjUyN3YtLjM1MmgxLjQ0OXYuMzUxaC0uNTI3djEuNjI0em0yLjE1MiAwaC4zNTF2LTEuOTc1aC0uNTI3bC0uMzA3IDEuNThoLS4wNDRsLS4zMDgtMS41OGgtLjU3djEuOTc1aC4zNVYyNS44NWwuMzUyIDEuNjY3aC4zNTFsLjM1Mi0xLjY2N3YxLjY2N3oiIGZpbGw9IiNGM0FFMTIiLz48L3N2Zz4="
                className={styles.footer__pay}
                alt="mastercard"
              />
            </Stack>
          </Grid>
          <Grid container item sm={12} md={2} justifyContent="space-around">
            <FacebookIcon />
            <YouTubeIcon />
            <InstagramIcon />
            <TelegramIcon />
            <WifiCalling3Icon />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Footer;
